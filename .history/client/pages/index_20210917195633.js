import React from 'react';
import {eth, getInstance} from '../web3/provider'

import UserStorage from "../web3/artifacts/UserStorage.json"

export default class IndexPage extends React.Component {

    async componentDidMount() {
        console.log(UserStorage)
        try{
            await ethereum.enable() // Prompt user to let our DApp access their address
            const addresses = await eth.getAccounts(); // Gets users MetaMask account
            console.log(addresses)
        } catch (err) {
            console.log("User denied access to their MetaMask account!")
        }
        const storage = await getInstance(UserStorage)
        const { username } = await storage.profiles.call(1)
        console.log("Got username:" username)
    }

    render() {
        return(
            <h1>Hello World</h1>
        )
    }
}