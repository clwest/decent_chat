// SPDX-License-Identifier: MIT

pragma solidity >=0.5.10 <0.9.0;

import "helpers/Owned.sol";

contract ContractManager is Owned {
    function setAddress(string memory _name, address _address) public {
        address[_name] = _address;
    }
}
