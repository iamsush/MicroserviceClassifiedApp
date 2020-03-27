import ListingsService from '#root/adapters/ListingsService.js';

const createListingResolver = async (obj, { description, title }, context) => {
    if(!context.res.locals.userSession) throw new Error("User not logged in");
    return await ListingsService.createListing({ description, title });
};

export default createListingResolver;