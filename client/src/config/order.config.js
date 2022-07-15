import { date } from "../utils/fakeData";

export const initOrderedFood = (data) => {
    const newData = data.map((item, index) => {
        const newItem = { ...item, quanityOrdered: 0 };
        return newItem;
    })
    return newData;
}

export const configPrice = (data) => {
    const newData = (parseFloat(data)).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
    return newData;
}

export const configDataOrderPost = (dataOrder, dataClient) => {
    // console.log(dataOrder);
    // console.log(dataClient);
    const idUser = sessionStorage.getItem('USER_KEY');
    const idFood = dataOrder.map((item, index) => {
        const id = item?._id;
        return id;
    });
    const quanityFood = dataOrder.map((item, index) => {
        const quanity = item?.quanityOrdered;
        return quanity;
    })
    const name = dataClient.name;
    const phone = dataClient.phone;
    const address = dataClient.address + ", " + dataClient.province;
    let time;
    switch (dataClient.date) {
        case "Hôm nay":
            time = new Date().getFullYear()
                + '-' + (new Date().getMonth() + 1 < 10 ?
                    '0' + (new Date().getMonth() + 1) :
                    new Date().getMonth() + 1)
                    + '-' + (new Date().getDate() < 10 ? '0'+ (new Date().getDate()) :  (new Date().getDate()))
                + 'T' + dataClient.time + ':00'
            break;
        case "Ngày mai":
            time = new Date().getFullYear()
                + '-' + (new Date().getMonth() + 1 < 10 ?
                    '0' + (new Date().getMonth() + 1) :
                    new Date().getMonth() + 1)
                + '-' + (new Date().getDate() < 9 ? '0'+ (new Date().getDate()+1) :  (new Date().getDate()+1))
                + 'T' + dataClient.time + ':00'
            break;
        case "Ngày kia":
            time = new Date().getFullYear()
                + '-' + (new Date().getMonth() + 1 < 10 ?
                    '0' + (new Date().getMonth() + 1) :
                    new Date().getMonth() + 1)
                    + '-' + (new Date().getDate() < 8 ? '0'+ (new Date().getDate()+2) :  (new Date().getDate()+2))
                + 'T' + dataClient.time + ':00'
            break;
    }
    const note = dataClient.note;

    return {
        id: Math.floor(Math.random()*888888)+100000,
        orderer: name,
        productList: dataOrder,
        quanityList: quanityFood,
        name: name,
        address: address,
        phone: phone,
        note: note,
        timeDelivery: time,
        createdAt: time,
        updatedAt: time,
        status: "Pending",
    }
}

export const configDataBookingPost = (data) => {
    const store = data.store;
    const numberOfPeople = data.numberPp;
    let time;
    switch (data.date) {
        case "Hôm nay":
            time = new Date().getFullYear()
                + '-' + (new Date().getMonth() + 1 < 10 ?
                    '0' + (new Date().getMonth() + 1) :
                    new Date().getMonth() + 1)
                    + '-' + (new Date().getDate() < 10 ? '0'+ (new Date().getDate()) :  (new Date().getDate()))
                + 'T' + data.time + ':00'
            break;
        case "Ngày mai":
            time = new Date().getFullYear()
                + '-' + (new Date().getMonth() + 1 < 10 ?
                    '0' + (new Date().getMonth() + 1) :
                    new Date().getMonth() + 1)
                + '-' + (new Date().getDate() < 9 ? '0'+ (new Date().getDate()+1) :  (new Date().getDate()+1))
                + 'T' + data.time + ':00'
            break;
        case "Ngày kia":
            time = new Date().getFullYear()
                + '-' + (new Date().getMonth() + 1 < 10 ?
                    '0' + (new Date().getMonth() + 1) :
                    new Date().getMonth() + 1)
                    + '-' + (new Date().getDate() < 8 ? '0'+ (new Date().getDate()+2) :  (new Date().getDate()+2))
                + 'T' + data.time + ':00'
            break;
    }
    const note = data.note;
    const phone = data.phone;

    return {
        store: store,
        people: numberOfPeople,
        note: note,
        phone: phone,
        date: time,
        booker: data.name,
        id: Math.floor(Math.random()*888888)+100000
    }
}

export const configPhoneNumber = (phonenumber) =>{
    if(phonenumber.length == 10){
        return '+84'+ (phonenumber +'').substring(1, (phonenumber +'').length);
    }else if(phonenumber.length == 12){
        return phonenumber;
    }
}


// const refreshToken = async()=>{

// }

// export const createAxios = (user) =>{

// }

