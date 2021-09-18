// SPDX-License-Identifier: MIT

pragma solidity >=0.5.10 <0.9.0;

import "../helpers/BaseStorage.sol";

contract TweetController is BaseStorage {

    function createTweet(uint _userId, string memory _text) public onlyController returns(uint newTweetId) { 

    }
    
}