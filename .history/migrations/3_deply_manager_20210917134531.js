const ContractManager = artifacts.require("ContractManager");
const UserStorage = artifacts.require("UserStorage");
const TweetStorage = artifacts.require("TweetStorage");

module.exports = (deployer) => {
    
    deployer.deploy(ContractManager)
    .then(() => {
        return ContractManager.deployed()
    })
}
