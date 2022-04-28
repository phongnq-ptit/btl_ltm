import axios from "axios";
import React from "react";
class OrderContainerService extends React.Component {
    constructor(props) {
        super(props)
        const url = 'https://f74a-2402-9d80-273-f7b1-a46f-c2c0-8a89-a60f.ngrok.io/api';
        this.apiUrl = url;

    }
    async getAllProduct() {
        const data = await axios.get(this.apiUrl + '/dishes')
        return data;
    }
    async getAllDistrict() {
        const data = await axios.get('https://vapi.vnappmob.com/api/province/district/01')
        return data;
    }
    async orderFood(data) {
        const dt = await
            axios
                .post(this.apiUrl + '/orders', data,);
        return dt;
    }
    async booking(data) {
        const dt = await
            axios
                .post(this.apiUrl + '/booking',
                    data);
        return dt;
    }
    async login(data) {
        const dt = await
            axios
                .post(this.apiUrl + '/login',
                    data)
        
        return dt;
    }
    async signup(data) {
        const dt = await
            axios
                .post(this.apiUrl + '/register',
                    data)
        
        return dt;
    }
}

export default OrderContainerService;