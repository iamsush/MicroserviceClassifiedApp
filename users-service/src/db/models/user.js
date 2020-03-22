import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        passwordHash: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', UserSchema);

export default User;