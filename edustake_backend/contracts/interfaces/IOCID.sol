// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IOCID {
    // This is a placeholder interface for the Open Campus ID system
    // Actual implementation will depend on the OCID API structure
    
    function verifyEducationalCredential(address user, bytes32 credentialId) external view returns (bool);
    function getUserCredentials(address user) external view returns (bytes32[] memory);
    function getCredentialWeight(bytes32 credentialId) external view returns (uint256);
}
