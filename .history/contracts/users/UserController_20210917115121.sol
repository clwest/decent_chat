// SPDX-License-Identifier: MIT

pragma solidity >=0.5.10 <0.9.0;

import "../helpers/BaseStorage.sol";

contract UserController is BaseStorage {
    function createUser(bytes32 _username) public returns(uint) {
        require(msg.sender == controllerAddr);
    }
}