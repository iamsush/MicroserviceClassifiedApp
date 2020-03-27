
import got from 'got';

import accessEnv from '#root/helpers/accessEnv.js';

const USERS_SERVICE_URI = accessEnv('USERS_SERVICE_URI');

export default class UsersService {
    static async createUser ({ email, password }) {
        const listings = await got.post(`${USERS_SERVICE_URI}/user`, {
            json: { email, password }
        })
        .json();
        return listings;
    }

    static async fetchUser ({ userId }) {
        const user = await got.get(`${USERS_SERVICE_URI}/user/${userId}`)
        .json();
        return user;
    }

    static async createUserSession ({ email, password }) {
        const body = await got.post(`${USERS_SERVICE_URI}/session`, {
            json: { email, password }
        })
        .json();
        return body;
    }

    static async deleteUserSession ({ sessionId }) {
        const body = await got.delete(`${USERS_SERVICE_URI}/session/${sessionId}`)
        .json();
        return body;
    }

    static async fetchUserSession ({ sessionId }) {
        const userSession = await got.get(`${USERS_SERVICE_URI}/session/${sessionId}`)
        .json();
        return userSession;
    }
}
 