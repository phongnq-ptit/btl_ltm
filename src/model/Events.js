import mongoose, { Schema } from "mongoose";

const eventSchema = new mongoose.Schema({
    image: {
        type: String
    },
    title: {
        type: String
    },
    contents: [{
        type: String
    }]
}, {
    timestamps: true
});

const Event = mongoose.model('Event', eventSchema);

export default Event;