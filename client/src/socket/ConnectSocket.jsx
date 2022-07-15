// import React from "react";
// import { over } from 'stompjs'
// import SockJS from 'sockjs-client'
// import { setSockjs } from "../store/Module.action";
// class ConnectSocket extends React.Component {
//     constructor(props) {
//         super(props)
//         let stompjs;
//         this.state = {
//         }
//     }
//     componentDidMount() {
//         const sockjs = new SockJS('https://wsocketlong.herokuapp.com/websocket')
//         let stompjs =  over(sockjs);
//         this.storeToRedux(stompjs);
//         stompjs.connect({}, () => {
//             stompjs.subscribe('/user/3/private', (payload) => {
//                 console.log(payload);
//             })
//         }, (e) => {
//             console.log(e);
//         });
//         console.log(this.props);
//     }
//     sendOrder(sockjs, data) {
//         console.log(sockjs);
//         // this.state.stompjs.send('/app/private-message/3', {},
//         //     JSON.stringify(data))
//     }

//     storeToRedux(data){
//         const {dispatch} = this.props;
//         console.log(dispatch);
//         dispatch(setSockjs(data));
//     }
// }

// export default ConnectSocket;