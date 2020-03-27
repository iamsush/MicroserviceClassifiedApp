
import got from 'got';

import accessEnv from '#root/helpers/accessEnv.js';

const LISTINGS_SERVICE_URI = accessEnv('LISTINGS_SERVICE_URI');

export default class ListingsService {
    static async fetchAllListings () {
        const listings = await got.get(`${LISTINGS_SERVICE_URI}/listings`).json();
        return listings;
    }
    static async createListing ({ description, title }) {
        const listing = await got.post(`${LISTINGS_SERVICE_URI}/listings`, {
            json: { description, title }
        })
        .json();
        return listing;
    }
}