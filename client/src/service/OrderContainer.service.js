import axios from "axios";
import React from "react";
// axios.defaults.withCredentials = true;
class OrderContainerService extends React.Component {
    constructor(props) {
        super(props)
        const url = 'http://localhost:8080/api';
        this.apiUrl = url;

    }
    async getAllProduct() {
        const data = await axios.get(this.apiUrl + '/product')
        return data;
    }

    async getAllCategory(){
        const data = await axios.get(this.apiUrl + '/product/category')
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
                    new URLSearchParams({
                        phonenumber: data?.phonenumber,
                        password: data?.password
                    }))

        return dt;
    }
    async signup(data) {
        const dt = await
            axios
                .post(this.apiUrl + '/user/signup',
                    data)

        return dt;
    }
    async getUserById(data) {
        const dt = await axios.get(this.apiUrl + '/user/' + data);
        return dt;
    }
    async updateUser(data) {
        const dt = await axios.put(this.apiUrl + '/user/update', data);
        return dt;
    }

    async getOrder(url) {
        const dt = await axios.get(this.apiUrl + '/orders/c-id/' + url);
        return dt;
    }

    async forgetPass(url) {
        const dt = await axios.get(this.apiUrl + '/users/forgot/' + url);
        return dt;
    }
}

export default OrderContainerService;