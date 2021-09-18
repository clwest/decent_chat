// SPDX-License-Identifier: MIT

pragma solidity >=0.5.10 <0.9.0;


contract UserController {
    function createUser(bytes32 _username) public returns(uint) {
        require(msg.sender == controllerAddr);
    }
}