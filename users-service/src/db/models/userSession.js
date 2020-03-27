import mongoose from 'mongoose';
// import Users from './users.js';
const Schema = mongoose.Schema;

const UserSessionSchema = Schema({
        userId: {
            required: true,
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        expiresAt: {
            required: true,
            type: Date
        }
    },
    {
        timestamps: true
    }
);

const UserSession = mongoose.model('UserSession', UserSessionSchema);

export default UserSession;