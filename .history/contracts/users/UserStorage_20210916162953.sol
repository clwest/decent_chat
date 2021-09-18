// SPDX-License-Identifier: MIT

pragma solidity >=0.5.16 <0.8.0;

contract UserStorage {

    mapping(uint256 => Profile) profiles;


    struct Profile {
        uint256 id;
        bytes32 username;
    }

    uint256 lastestUserId = 0;

    function createUser(bytes32 _username) public returns (uint256) { 
        lastestUserId++;

        profiles[lastestUserId] = Profile(lastestUserId, _username);

        return lastestUserId;

    }
}