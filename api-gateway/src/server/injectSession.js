import UsersService from '#root/adapters/UsersService';

const injectSession = (req, res, next) => {
    const userSessionId = req.cookies.userSessionId;
    if (userSessionId) {
        const userSession = UsersService.fetchUserSession({
            sessionId: userSessionId
        });
        res.locals.userSession = userSession;
    }
    return next();
};

export default injectSession;