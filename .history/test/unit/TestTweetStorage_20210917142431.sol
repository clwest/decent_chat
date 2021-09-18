// SPDX-License-Identifier: MIT

pragma solidity >=0.5.10 <0.9.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/tweets/TweetStorage.sol";

contract TestTweetStorage {
    TweetStorage tweetStorage;

    constructor() public {
        tweetStorage = new TweetStorage();
        tweetStorage.setControllerAddr(address(this));
    }


    function testCreateTweet() public {
        TweetStorage _storage = TweetStorage(DeployedAddresses.TweetStorage());

        uint _userId = 1;
        uint _expectedTweetId = 1;

        Assert.equal(
            _storage.createTweet(_userId, "Hello World!"),
            _expectedTweetId,
            "Should create tweet with ID 1"
        );
    }
}