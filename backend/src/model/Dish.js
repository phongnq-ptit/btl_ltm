import mongoose from 'mongoose';

const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String
    },
    image: {
        type: String,
        default: "chua co anh nha huhu"
    }
}, {
    timestamps: true
});

const Dish = mongoose.model('Dish', dishSchema);

export default Dish;