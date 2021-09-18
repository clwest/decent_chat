const UserStorage = artifacts.require('UserStorage')
var assert = require('chia').assert

contract('user', () => {
    it("can create user", async () => {
        const storage = await UserStorage.deployed()

        const username = web3.utils.fromAscii('Chris')
        const tx = await storage.createUser(username)
        assert.isOk(tx)
        console.log(tx)
    })
})
