import mongoose, { Schema } from "mongoose";

const orderSchema = new mongoose.Schema({
    orderer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    dishes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dish'
    }],
    address: {
        type: String,
        required: true
    },
    note: {
        type: String,
        default: ''
    },
    status: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
