import React from 'react';
import eth from '../web3/provider'' 

export default class IndexPage extends React.Component {

    async componentDidMount() {
        try{
            await ethereum.enable() // Prompt user to let our DApp access their address
            const addresses = await eth.getAccounts(); // Gets users MetaMask account
            console.log(addresses)
        } catch (err) {
            console.log("User denied access to their MetaMask account)
        }
    }

    render() {
        return(
            <h1>Hello World</h1>
        )
    }
}