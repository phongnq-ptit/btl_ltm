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

// đặt chỉ số cho dish
dishSchema.index({ name: 'text' });

const Dish = mongoose.model('Dish', dishSchema);

// khởi tạo chỉ số
Dish.createIndexes({ name: 'text' });

export default Dish;