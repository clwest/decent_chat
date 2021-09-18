// SPDX-License-Identifier: MIT

pragma solidity >=0.5.16 <0.9.0;

contract BaseStorage {
    address public controllerAddr;

    function setControllerAddr(address _controllerAddr) public {
        require(msg.sender == ownerAddr);

        controllerAddr = _controllerAddr;
    }
}