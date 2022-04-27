import React from "react";
import { over } from 'stompjs'
import SockJS from 'sockjs-client'
class ConnectSocket extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stompjs: null
        }
    }

    register() {
        let stompjs ;
        const sockjs = new SockJS('https://wsocketlong.herokuapp.com/websocket')
        stompjs = over(sockjs);
        stompjs.connect({}, () => {
            stompjs.subscribe('/user/3/private', (payload) => {
                console.log(payload);
            })
        }, (e) =>{
            console.log(e);
        });
        this.setState({
            stompjs: stompjs,
        })
    }
}

export default ConnectSocket;