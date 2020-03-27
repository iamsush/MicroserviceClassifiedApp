import Listing from './listing.js';

const getListings = async () => {
    try {
        const listings = await Listing.find();
        return listings;
    } catch (err) {
        throw new Error(err);
    }
};
const createListing = async ({ description, title }) => {
    try {
        const listing = await Listing.create({
            description,
            title
        });
        return listing;
    } catch(err) {
        throw new Error(err);
    }
}
module.exports = {
    getListings,
    createListing
};
