import User from './user';
import UserSession from './userSession';

import { addHours } from 'date-fns';

const USER_SESSION_EXPIRY_HOURS = 1;

const createUser = async ({ email, passwordHash }) => {
    try {
        const user = await User.create({
            email,
            passwordHash
        });
        return user;
    } catch(err) {
        throw new Error(err);
    }
};

const getUserByEmail = async ({ email }) => {
    try {
        const user = await User.findOne({
            email
        });
        return user;
    }catch (err){
        throw new Error(err);
    }
};

const getUserById = async ({ userId }) => {
    try {
        const user = await User.findById(userId);
        return user;
    } catch(err){
        throw new Error(err);
    }
}

const createUserSession = async ({ userId }) => {
    try {
        const expiresAt = addHours(new Date(), USER_SESSION_EXPIRY_HOURS);
        const userSession = await UserSession.create({
            expiresAt,
            userId
        });
        return userSession;
    } catch(err) {
        throw new Error(err);
    }
};

const deleteUserSession = async ({ sessionId }) => {
    try {
        const userSession = await UserSession.findByIdAndDelete(sessionId);
        return userSession;
    } catch (err) {
        throw new Error(err);
    }
};

const getUserSession = async ({ sessionId }) => {
    try {
        const userSession = await UserSession.findById(sessionId);
        return userSession;
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = {
    createUser,
    getUserByEmail,
    getUserById,
    createUserSession,
    deleteUserSession,
    getUserSession
};
