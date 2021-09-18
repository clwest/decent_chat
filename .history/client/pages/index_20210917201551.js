import React from 'react';
import { getUserInfo } from '../web3/users'

export default class IndexPage extends React.Component {
    logUser = async () => {
        const userInfo = await getUserInfo(1);
        console.log(userInfo)
    }

    render() {
        return(
            <h1>Hello World</h1>
        )
    }
}