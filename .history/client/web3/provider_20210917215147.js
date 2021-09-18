import Web3 from "web3";
import contract from "truffle-contract";

const provider = () => {
    // If the user has metamask
    if(typeof web3 !== 'undefined') {
        App.web3Provider = web3.currentProvider
        web3 = new Web3(web3.currentProvider)
    } else {
        App.web3Provider = new web3.providers.HttpProvider("http://127.0.0.1:8545")
        console.log("You need to install MetaMask for this app to work")
    }
}

export const eth = new Web3(provider()).eth;

export const getInstance = artifact => {
    const contractObj = contract(artifact)
    contractObj.setProvider(provider())

    return contractObj.deployed()
}