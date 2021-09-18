const TweetStorage = artifacts.require("TweetStorage");

contract("tweets", ()  => {
    it("can get tweet",async  () => {
        before(async () => {
        const tweetStorage = await TweetStorage.deployed()
        await tweetStorage.createTweet(1, "Hello World!")
    })

        // const tweet = await storage.tweets.call(1) // get the data
        const {id, text, userId} = tweet // Destructure the data

        // checking for expected values in different parts

        assert.equal(parseInt(id), 1) // checking tweet id;
        assert.equal(text, "Hello World")
        assert.equal(parseInt(userId), 1) // checking user id
    })
})