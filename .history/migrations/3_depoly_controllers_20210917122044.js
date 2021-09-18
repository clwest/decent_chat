const UserController = artifacts.require("UserController");
const TweetController = artifacts.require("TweetController");

module.exports = (deployer) => {
    deployer.then(async () => {
        await deployer.deploy(UserController)
        await deployer.deploy(TweetController)
    })
}