import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
    booker: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    dishes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dish'
    }],
    numberOfPeople: {
        type: Number,
        required: true
    },
    name: {
        type: String
    },
    phone: {
        type: String
    },
    arrivalDay: {
        type: Date,
        required: true
    },
    description: {
        type: String,
    },
    status: {
        type: Boolean,
        default: false
    }
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;