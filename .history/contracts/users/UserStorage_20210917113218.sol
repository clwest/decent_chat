// SPDX-License-Identifier: MIT

pragma solidity >=0.5.16 <0.9.0;

contract UserStorage {

    mapping(uint => Profile) public profiles;


    struct Profile {
        uint id;
        bytes32 username;
    }

    uint256 lastestUserId = 0;
    
    address controllerAddr;
    address ownerAddr;

    function createUser(bytes32 _username) public returns(uint) { 
        lastestUserId++;
        profiles[lastestUserId] = Profile(lastestUserId, _username);
        return lastestUserId;
    }

    function setControllerAddr(address _controllerAddr) public {
        require(msg.sender == ownerAddr);
        controllerAddr = _controllerAddr;
    }

    
}