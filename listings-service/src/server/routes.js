import { getListings, createListing } from '#root/db/models';

const setupRoutes = app => {
    app.get('/listings', async (req, res, next) => {
        try {
            const listings = await getListings();
            return res.json(listings);
        } catch (err) {
            return next(err);
        }
    });

    app.post('/listings', async (req, res, next) => {
        const description = req.body.description, title = req.body.title;
        if(!description || !title){
            return next("Invalid body");
        }
        try {
            const listings = await createListing({
                description,
                title
            });
            return res.json(listings);
        } catch (err) {
            return next(err);
        }
    });
};

export default setupRoutes;