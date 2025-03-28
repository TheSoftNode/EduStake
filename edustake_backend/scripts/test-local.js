const hre = require("hardhat");

async function main() {
  console.log("Testing EduStake deployment on local network...");

  // Deploy mock contracts first
  const MockEDU = await hre.ethers.getContractFactory("MockEDU");
  const mockEDU = await MockEDU.deploy();
  await mockEDU.deployed();
  console.log("MockEDU deployed to:", mockEDU.address);

  const MockOCID = await hre.ethers.getContractFactory("MockOCID");
  const mockOCID = await MockOCID.deploy();
  await mockOCID.deployed();
  console.log("MockOCID deployed to:", mockOCID.address);

  // Deploy EduStake
  const EduStake = await hre.ethers.getContractFactory("EduStake");
  const eduStake = await EduStake.deploy(mockEDU.address, mockOCID.address);
  await eduStake.deployed();
  console.log("EduStake deployed to:", eduStake.address);

  // Get test accounts
  const [deployer, user1, user2] = await hre.ethers.getSigners();
  console.log("Testing with accounts:");
  console.log("- Deployer:", deployer.address);
  console.log("- User 1:", user1.address);
  console.log("- User 2:", user2.address);

  // Mint some tokens to users
  const mintAmount = hre.ethers.utils.parseEther("1000");
  await mockEDU.mint(user1.address, mintAmount);
  await mockEDU.mint(user2.address, mintAmount);
  console.log("Minted 1000 EDU tokens to each test user");

  // Create staking pools
  console.log("\nCreating staking pools...");
  
  // Basic Pool
  await eduStake.createStakingPool(
    0, // BASIC_POOL
    500, // 5% APY
    hre.ethers.utils.parseEther("10"), // 10 EDU minimum
    30 * 24 * 60 * 60, // 30 day lock
    [] // No credentials required
  );
  console.log("Basic Pool created");
  
  // Educational Pool
  const courseCredential = hre.ethers.utils.formatBytes32String("COURSE_101");
  await eduStake.createStakingPool(
    1, // EDUCATIONAL_POOL
    1000, // 10% APY
    hre.ethers.utils.parseEther("20"), // 20 EDU minimum
    60 * 24 * 60 * 60, // 60 day lock
    [courseCredential] // Requires course completion
  );
  console.log("Educational Pool created");
  
  // Add educational credential to user1
  await mockOCID.addCredential(
    user1.address, 
    courseCredential,
    100 // Weight
  );
  console.log("Added educational credential to User 1");
  
  // Set educational multiplier
  await eduStake.setEducationalMultiplier(courseCredential, 500); // 5% boost
  console.log("Set educational multiplier for COURSE_101");

  // User1 approves and stakes in the basic pool
  console.log("\nTesting staking functionality...");
  const stakeAmount = hre.ethers.utils.parseEther("50");
  await mockEDU.connect(user1).approve(eduStake.address, stakeAmount);
  await eduStake.connect(user1).stake(0, stakeAmount);
  console.log("User 1 staked 50 EDU in the basic pool");

  // Check stake details
  const stake = await eduStake.userStakes(user1.address, 0);
  console.log("Stake amount:", hre.ethers.utils.formatEther(stake.amount), "EDU");
  console.log("Stake active:", stake.active);
  
  console.log("\nLocal testing complete!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });