import { User } from '#root/db/models';
import hashPassword from '#root/helpers/hashPassword';

const setupRoutes = app => {
    app.post('/users', async (req, res, next) => {
        if(!req.body.email || !req.body.password) {
            console.log(req.body);
            return next(new Error('Invalid Body'));
        }

        try {
            const newUser = await User.create({
                email: req.body.email,
                passwordHash: hashPassword(req.body.password)
            });
            return res.json(newUser);
        } catch(err) {
            return next(err);
        }
    });
};

export default setupRoutes;