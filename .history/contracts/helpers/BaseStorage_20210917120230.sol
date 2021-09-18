// SPDX-License-Identifier: MIT

pragma solidity >=0.5.16 <0.9.0;

import "./Owned.sol";

contract BaseStorage is Owned{
    address public controllerAddr;

    function setControllerAddr(address _controllerAddr) public onlyOwner() {
        require(msg.sender == ownerAddr);

        controllerAddr = _controllerAddr;
    }
}