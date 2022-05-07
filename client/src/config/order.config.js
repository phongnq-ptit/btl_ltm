import { date } from "../utils/fakeData";

export const initOrderedFood = (data) => {
    const newData = data.map((item, index) => {
        const newItem = { ...item, quanityOrdered: 0 };
        return newItem;
    })
    return newData;
}

export const configPrice = (data) => {
    const newData = data.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
    return newData;
}

export const configDataOrderPost = (dataOrder, dataClient) => {
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
                + '-' + new Date().getDate()
                + 'T' + dataClient.time + ':00'
            break;
        case "Ngày mai":
            time = new Date().getFullYear()
                + '-' + (new Date().getMonth() + 1 < 10 ?
                    '0' + (new Date().getMonth() + 1) :
                    new Date().getMonth() + 1)
                + '-' + '0'+ (new Date().getDate() + 1)
                + 'T' + dataClient.time + ':00'
            break;
        case "Ngày kia":
            time = new Date().getFullYear()
                + '-' + (new Date().getMonth() + 1 < 10 ?
                    '0' + (new Date().getMonth() + 1) :
                    new Date().getMonth() + 1)
                + '-' + (new Date().getDate() + 2)
                + 'T' + dataClient.time + ':00'
            break;
    }
    console.log(time);
    const note = dataClient.note;

    return {
        orderer: idUser,
        dishes: idFood,
        quantity: quanityFood,
        name: name,
        address: address,
        phone: phone,
        note: note,
        timeDelivery: time,
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
                + '-' + new Date().getDate()
                + 'T' + data.time + ':00'
            break;
        case "Ngày mai":
            time = new Date().getFullYear()
                + '-' + (new Date().getMonth() + 1 < 10 ?
                    '0' + (new Date().getMonth() + 1) :
                    new Date().getMonth() + 1)
                + '-' + (new Date().getDate() + 1)
                + 'T' + data.time + ':00'
            break;
        case "Ngày kia":
            time = new Date().getFullYear()
                + '-' + (new Date().getMonth() + 1 < 10 ?
                    '0' + (new Date().getMonth() + 1) :
                    new Date().getMonth() + 1)
                + '-' + (new Date().getDate() + 2)
                + 'T' + data.time + ':00'
            break;
    }
    const note = data.note;
    const phone = data.phone;

    return {
        store: store,
        numberOfPeople: numberOfPeople,
        note: note,
        phone: phone,
        arrivalDay: time,
    }
}