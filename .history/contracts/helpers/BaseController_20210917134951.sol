// SPDX-License-Identifier: MIT

pragma solidity >=0.5.10 <0.9.0;

import './Owned.sol';

contract BaseController is Owned {
    // This is the contract managers address
    address managerAddr;

    function setManagerAddr(address _managerAddr) public onlyOwner {
        managerAddr = _managerAddr;
    }
}