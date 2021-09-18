import { eth, getInstance } from './provider'

import UserStorage from "./artifacts/UserStorage.json"
import UserController from "./artifacts/UserController.json"

export const getUserInfo = async (userId) => {
    const storage = await getInstance(UserStorage)
    const profile = await storage.profiles.call(userId)

    return profile
}

export createUser = async (username) => {
    const controller = await getInstance(UserController)

    try
}