import mongoose, { Schema } from "mongoose";

const tableSchema = new Schema({
    tableName: {
        type: String,
        required: true
    },
    tableStatus: {
        type: Boolean,
        default: false // false: còn trống, true : đã dùng
    }
})