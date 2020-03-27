import {
    createUser,
    getUserById,
    getUserByEmail,
    createUserSession,
    getUserSession,
    deleteUserSession
} from '#root/db/models/index.js';
import { hashPassword, passwordCompareSync } from '#root/helpers/crypt.js';

const setupRoutes = app => {
    app.post('/session', async (req, res, next) => {
        if(!(req.body.email || req.body.password)){
            return next(new Error("Invalid Body!"));
        }
        try {
            const user = await getUserByEmail({
                email: req.body.email
            });
            if(!user){
                return next(new Error("Invalid Email"));
            }
            else if(!passwordCompareSync({
                passwordToTest: req.body.password,
                passwordHash: user.passwordHash
            })){
                return next(new Error("Invalid Password"));
            } else {
                const userSession = await createUserSession({userId: user._id});
                return res.json(userSession);
            }
        }catch (err){
            return next(err);
        }
    });

    app.get('/session/:sessionId', async (req, res, next) => {
        try{
            const sessionId = req.params.sessionId;
            const userSession = await getUserSession({ sessionId });
            if(!userSession) return next(new Error("Session not found"));
            return res.json(userSession);
        } catch(err){
            next(err);
        }
    });

    app.delete('/session/:sessionId', async (req, res, next) => {
        try{
            const sessionId = req.params.sessionId;
            await deleteUserSession({ sessionId });
            return res.end();
        } catch(err){
            next(err);
        }
    });

    app.post('/user', async (req, res, next) => {
        if(!req.body.email || !req.body.password) {
            return next(new Error('Invalid Body!'));
        }

        try {
            const newUser = await createUser({
                email: req.body.email,
                passwordHash: hashPassword(req.body.password)
            });
            return res.json(newUser);
        } catch(err) {
            return next(err);
        }
    });

    app.get('/user/:userId', async (req, res, next) => {
        try {
            const userId = req.params.userId;
            const user = await getUserById({ userId });

            if(!user) return next(new Error("Invalid User ID"));
            
            return res.json(user);
        } catch(err){
            return next(err);
        }
    });
};

export default setupRoutes;