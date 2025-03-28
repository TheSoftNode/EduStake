// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "../interfaces/IEDU.sol";
import "../interfaces/IOCID.sol";

contract EduStake is Ownable, ReentrancyGuard, Pausable {
    using SafeERC20 for IEDU;
    
    // State variables
    IEDU public eduToken;
    IOCID public ocidContract;
    
    // Pool types
    enum PoolType { Basic, Educational, Community, Expert }
    
    struct StakingPool {
        PoolType poolType;
        uint256 baseAPY;  // Base APY in basis points (1% = 100)
        uint256 minimumStake;
        uint256 lockPeriod; // in seconds
        bytes32[] requiredCredentials; // Required OCID credentials for this pool
    }
    
    struct Stake {
        uint256 amount;
        uint256 startTime;
        uint256 endTime;
        uint256 lastRewardCalculation;
        PoolType poolType;
        uint256 poolId;
        bool active;
    }
    
    // Mapping poolId => StakingPool
    mapping(uint256 => StakingPool) public stakingPools;
    uint256 public poolCount;
    
    // Mapping user => stakeId => Stake
    mapping(address => mapping(uint256 => Stake)) public userStakes;
    mapping(address => uint256) public userStakeCount;
    
    // Educational multipliers - credentialId => multiplier (in basis points, 100 = 0.01 or 1%)
    mapping(bytes32 => uint256) public educationalMultipliers;
    
    // Events
    event PoolCreated(uint256 indexed poolId, PoolType poolType, uint256 baseAPY);
    event Staked(address indexed user, uint256 indexed poolId, uint256 stakeId, uint256 amount);
    event Unstaked(address indexed user, uint256 indexed stakeId, uint256 amount);
    event RewardsClaimed(address indexed user, uint256 indexed stakeId, uint256 amount);
    
    // Constructor
    constructor(address _eduToken, address _ocidContract) {
        eduToken = IEDU(_eduToken);
        ocidContract = IOCID(_ocidContract);
    }
    
    // Function to create a new staking pool
    function createStakingPool(
        PoolType _poolType,
        uint256 _baseAPY,
        uint256 _minimumStake,
        uint256 _lockPeriod,
        bytes32[] memory _requiredCredentials
    ) external onlyOwner {
        uint256 poolId = poolCount;
        stakingPools[poolId] = StakingPool({
            poolType: _poolType,
            baseAPY: _baseAPY,
            minimumStake: _minimumStake,
            lockPeriod: _lockPeriod,
            requiredCredentials: _requiredCredentials
        });
        
        poolCount++;
        emit PoolCreated(poolId, _poolType, _baseAPY);
    }
    
    // Function to set educational multipliers
    function setEducationalMultiplier(bytes32 _credentialId, uint256 _multiplier) external onlyOwner {
        educationalMultipliers[_credentialId] = _multiplier;
    }
    
    // Function to stake tokens
    function stake(uint256 _poolId, uint256 _amount) external nonReentrant whenNotPaused {
        StakingPool storage pool = stakingPools[_poolId];
        
        // Check minimum stake
        require(_amount >= pool.minimumStake, "Amount below minimum stake");
        
        // Check credential requirements
        if (pool.requiredCredentials.length > 0) {
            for (uint256 i = 0; i < pool.requiredCredentials.length; i++) {
                require(
                    ocidContract.verifyEducationalCredential(msg.sender, pool.requiredCredentials[i]),
                    "Missing required credentials"
                );
            }
        }
        
        // Transfer tokens to contract
        eduToken.safeTransferFrom(msg.sender, address(this), _amount);
        
        // Create stake
        uint256 stakeId = userStakeCount[msg.sender];
        userStakes[msg.sender][stakeId] = Stake({
            amount: _amount,
            startTime: block.timestamp,
            endTime: block.timestamp + pool.lockPeriod,
            lastRewardCalculation: block.timestamp,
            poolType: pool.poolType,
            poolId: _poolId,
            active: true
        });
        
        userStakeCount[msg.sender]++;
        
        emit Staked(msg.sender, _poolId, stakeId, _amount);
    }
    
    // Function to calculate rewards for a stake
    function calculateRewards(address _user, uint256 _stakeId) public view returns (uint256) {
        Stake storage userStake = userStakes[_user][_stakeId];
        
        if (!userStake.active) {
            return 0;
        }
        
        StakingPool storage pool = stakingPools[userStake.poolId];
        
        uint256 timeElapsed = block.timestamp - userStake.lastRewardCalculation;
        uint256 baseReward = (userStake.amount * pool.baseAPY * timeElapsed) / (365 days * 10000);
        
        // Calculate educational multiplier
        uint256 multiplier = 10000; // Base multiplier (1x = 10000)
        bytes32[] memory userCredentials = ocidContract.getUserCredentials(_user);
        
        for (uint256 i = 0; i < userCredentials.length; i++) {
            multiplier += educationalMultipliers[userCredentials[i]];
        }
        
        // Apply multiplier to reward
        return (baseReward * multiplier) / 10000;
    }
    
    // Function to claim rewards
    function claimRewards(uint256 _stakeId) external nonReentrant whenNotPaused {
        Stake storage userStake = userStakes[msg.sender][_stakeId];
        
        require(userStake.active, "Stake not active");
        
        uint256 rewards = calculateRewards(msg.sender, _stakeId);
        
        // Update last reward calculation time
        userStake.lastRewardCalculation = block.timestamp;
        
        // Transfer rewards to user
        if (rewards > 0) {
            eduToken.safeTransfer(msg.sender, rewards);
            emit RewardsClaimed(msg.sender, _stakeId, rewards);
        }
    }
    
    // Function to unstake tokens
    function unstake(uint256 _stakeId) external nonReentrant {
        Stake storage userStake = userStakes[msg.sender][_stakeId];
        
        require(userStake.active, "Stake not active");
        require(block.timestamp >= userStake.endTime, "Stake still locked");
        
        // Calculate final rewards
        uint256 rewards = calculateRewards(msg.sender, _stakeId);
        
        // Set stake as inactive
        userStake.active = false;
        
        // Transfer principal and rewards to user
        eduToken.safeTransfer(msg.sender, userStake.amount + rewards);
        
        emit Unstaked(msg.sender, _stakeId, userStake.amount);
        if (rewards > 0) {
            emit RewardsClaimed(msg.sender, _stakeId, rewards);
        }
    }
    
    // Emergency functions
    function pause() external onlyOwner {
        _pause();
    }
    
    function unpause() external onlyOwner {
        _unpause();
    }
    
    // Emergency withdraw (for recovery)
    function emergencyWithdraw(address _token, uint256 _amount) external onlyOwner {
        IEDU(_token).safeTransfer(owner(), _amount);
    }
}
