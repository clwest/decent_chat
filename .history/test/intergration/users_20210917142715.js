const UserStorage = artifacts.require('UserStorage')
const UserController = artifacts.require('UserController')


const utils = require('../utils')
const { assertVMException } = utils

contract('users', () => {
    it("can create user", async () => {
        const storage = await UserStorage.deployed()
        const username = web3.utils.fromAscii("Chris")
        const tx = await storage.createUser(username)
    })

    it("can get user", async () => {
        const storage = await UserStorage.deployed()
        const userId = 1

        const userInfo = await storage.profiles.call(userId)
        const username = web3.utils.toAscii(userInfo[1]).replace(/\u0000/g, '')

        assert.equal(username, "Chris")

    })

    it("can't create user without controller", async () => {
        const storage = await UserStorage.deployed()

        try {
            const username = web3.utils.fromAscii("Chris")
            await storage.createUser(username)
            assert.fail() 
        } catch(err) {
            assertVMException(err)
        }
    })
})
