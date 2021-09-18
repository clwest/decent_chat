// SPDX-License-Identifier: MIT

pragma solidity >=0.5.16 <0.9.0;

contract Owned {
    address public ownerAddr;

    constructor()  {
        ownerAddr = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == ownerAddr);
        _;
    }

    function transferOwnership(address _newOwner) public onlyOwner() {
        // The new address cannot but none!
        require(_newOwner != address(0));

        ownerAddr = _newOwner;
    }
}