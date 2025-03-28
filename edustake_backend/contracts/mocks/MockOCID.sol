// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "../interfaces/IOCID.sol";

contract MockOCID is IOCID {
    // Mapping user => credentials
    mapping(address => bytes32[]) private userCredentials;
    
    // Mapping credentialId => weight
    mapping(bytes32 => uint256) private credentialWeights;
    
    // Function to add a credential to a user
    function addCredential(address _user, bytes32 _credentialId, uint256 _weight) external {
        userCredentials[_user].push(_credentialId);
        credentialWeights[_credentialId] = _weight;
    }
    
    // Implementing IOCID functions
    function verifyEducationalCredential(address _user, bytes32 _credentialId) external view override returns (bool) {
        bytes32[] memory credentials = userCredentials[_user];
        
        for (uint256 i = 0; i < credentials.length; i++) {
            if (credentials[i] == _credentialId) {
                return true;
            }
        }
        
        return false;
    }
    
    function getUserCredentials(address _user) external view override returns (bytes32[] memory) {
        return userCredentials[_user];
    }
    
    function getCredentialWeight(bytes32 _credentialId) external view override returns (uint256) {
        return credentialWeights[_credentialId];
    }
}