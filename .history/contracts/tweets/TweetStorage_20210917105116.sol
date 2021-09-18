// SPDX-License-Identifier: MIT

pragma solidity >=0.5.10 <0.9.0;

contract TweetStorage {
    mapping(uint => Tweet) public tweets;

    struct Tweet {
        uint id;
        string text;
        uint userId;
        uint postedAt;
    }

    uint lastestTweetId = 0;

    function createTweet(uint _userId, string memory _text) public returns(uint) {
        lastestTweetId++;
        
        tweets[lastestTweetId] = Tweet(lastestTweetId, _text, _userId, block.timestamp());

        return lastestTweetId;
    }
}