import Web3 from "web3";
import contract from "truffle-contract"'

const provider = () => {
    // If the user has metamask
    if(typeof web3 !== 'undefined') {
        return web3.currentProvider
    } else {
        console.log("You need to install MetaMask for this app to work")
    }
}

export const eth = new Web3(provider()).eth;