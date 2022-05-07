import axios from "axios";
import React from "react";
class OrderContainerService extends React.Component {
    constructor(props) {
        super(props)
        const url = 'http://localhost:5000/api';
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
    async getUserById(data){
        const dt = await axios.get(this.apiUrl + '/users/' + data);
        return dt;
    }
    async updateUser(data){
        const dt = await axios.put(this.apiUrl + '/users/update', data);
        return dt;
    }
}

export default OrderContainerService;