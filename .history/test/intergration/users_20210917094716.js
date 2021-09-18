const UserStorage = artifacts.require('UserStorage')


it("can create user", async () => {
    const storage = await UserStorage.deployed()
    const tx = await storage.createUser("Chris")
    assert.isOk(tx)
    })

