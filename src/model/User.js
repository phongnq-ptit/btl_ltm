import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    role: {
        /**
         * admin: 4
         * chef: 3
         * receptionist: 2 (le tan)
         * client: 1
         */
        type: Number,
        required: true,
        default: 1
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    token: {
        type: String,
        unique: true
    }
}, {
    timestamps: true
});

// đặt chỉ số cho user
userSchema.index({ fullName: 'text' });

const User = mongoose.model('User', userSchema);

// khởi tạo chỉ số
User.createIndexes({ fullName: 'text' });

export default User;