// SPDX-License-Identifier: MIT

pragma solidity >=0.5.10 <0.9.0;

contract TweetStorage {
    mapping(uint => Tweet) public tweets;

    struct Tweet {
        uint _id;
        string _text;
        uint _userId;
        uint _postedAt;
    }

    uint lastestTweetId = 0;

    function createTweet(uint _userId, string memory _text) public returns(uint) {
        lastestTweetId++;
    }
}