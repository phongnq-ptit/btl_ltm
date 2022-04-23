const express = require('express')
const router = express.Router()
import faker from 'faker'
import Dish from '../model/Dish.js'

const initFakeRoute = (app) => {
    router.get('/generate-fake-data', async (req, res, next) => {
        for (let i = 0; i < 96; i++) {
            const newprd = new Dish();
            newprd.name = faker.commerce.productName()
            newprd.price = faker.commerce.price();
            newprd.quantity = 1;
            newprd.description = "khong be oi";
            newprd.image = faker.image.image();
            await newprd.save();
        }
        res.send('OK');
    })

    return app.use('/', router);
}

export default initFakeRoute;