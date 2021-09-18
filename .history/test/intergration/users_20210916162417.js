const UserStorage = artifacts.require('UserStorage')

contract('user', () => {
    if("can create user", async () => {
        const storage = await UserStorage.deployed()

        const username = web3.utils.fromAscii('Chris')
        const tx = await storage.createUser(username)

        const.log(tx)
    })
})
