// SPDX-License-Identifier: MIT

pragma solidity >=0.5.16 <0.9.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/users/UserStorage.sol";


contract TestUserStorage {
    function testCreateFirstUser() public {
        UserStorage_storage = UserStorage(DeployedAddresses.UserStorage());
        uint _expectedId = 1;

        Assert.equal(_storage.createUser("chris"), _expectedId, "Should create a user with the id 1");
    }
}
