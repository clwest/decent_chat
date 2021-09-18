const UserController = artifacts.require("UserController");
const UserStorage = artifacts.require("UserStorage");
const ContractManager = artifacts.require("ContractManager");

module.exports = (deployer) => {

    deployer.deploy(UserController)
    .then(() => {
        return UserController.deployed()
    })
    .then(userCtrl => {
        userCtrl.setManagerAddr(ContractManager.address)

        return Promise.all([
            ContractManager.deployed(),
            UserStorage.deployed
        ])
    })
}