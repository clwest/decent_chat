å// SPDX-License-Identifier: MIT

pragma solidity >=0.5.16 <0.9.0;

contract Owned {
    address public ownerAddr;

    constructor() public {
        ownerAddr = msg.sender;
    }

    function transferOwnership(address _newOwner) public {
        // only the current owner can set a new ownerAddr
        require(msg.sender == ownerAddr);

        // The new address cannot but none!
        require(_newOwner != address(0));

        ownerAddr = _newOwner;
    }
}