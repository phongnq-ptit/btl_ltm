import axios from "axios";
import React from "react";
class OrderContainerService extends React.Component {
    constructor(props){
        super(props)
        const url = 'https://8015-2402-9d80-229-accc-14c9-d64f-2cc0-67d1.ngrok.io/api';
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
}

export default OrderContainerService;