const UserController = artifacts.require("UserController");
const TweetController = artifacts.require("TweetController");

const UserStorage = artifacts.require("UserStorage");
const TweetStorage = artifacts.require("TweetStorage");

module.exports = (deployer) => {
    deployer.then(async () => {
        await deployer.deploy(UserController)
        await deployer.deploy(TweetController)
    })

    // Get the deployed storage contract instances
    .then(() => {
        return Promise.all([
            UserStorage.deployed(),
            TweetStorage.deployed()
        ])
    })
}