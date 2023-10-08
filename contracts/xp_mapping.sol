// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract XPPointsTracker {
    // Mapping to store XP points for each wallet address and activity hash
    mapping(address => mapping(bytes32 => uint256)) public xpPoints;

    // Function to add XP points for a specific wallet address and activity hash
    function addXPPoints(address walletAddress, bytes32 activityHash, uint256 points) public {
        xpPoints[walletAddress][activityHash] += points;
    }

    // Function to retrieve XP points for a specific wallet address and activity hash
    function getXPPoints(address walletAddress, bytes32 activityHash) public view returns (uint256) {
        return xpPoints[walletAddress][activityHash];
    }
}