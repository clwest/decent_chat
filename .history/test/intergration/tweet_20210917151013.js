const TweetStorage = artifacts.require("TweetStorage");
const TweetController = artifacts.require("TweetController");

const utils = require('../utils')
const { assertVMException } = utils

contract("tweets", ()  => {

    it("can create tweet with controller", async () => {
        const controller = await TweetController.deployed()
        const tx = await controller.createTweet(1, "Hello World!")
        assert.isOk(tx)
    })


    it("can get tweet",async  () => {
        const tweet = await tweetStorage.tweets.call(1) // get the data
        const {id, text, userId} = tweet // Destructing the data;
        // checking for expected values in different parts
        assert.equal(parseInt(id), 1) // checking tweet id;
        assert.equal(text, "Hello World") // retreive 
        assert.equal(parseInt(userId), 1) // checking user id
    
    })

    it("can't create tweet without controller", async () => {
        const storage = await TweetStorage.deployed()

        try {
            tx = await storage.createTweet(1, "Chris")
            assert.fail()
        } catch (err) {
            assertVMException(err)
        }
    })
})