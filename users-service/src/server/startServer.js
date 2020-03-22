import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import setupRoutes from './routes.js';
import accessEnv from '#root/helpers/accessEnv.js';

const PORT = accessEnv("PORT", 7101);

const app = express();

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(
    cors({
        origin: (origin, cb) => cb(null, true),
        credentials: true
    })
);

setupRoutes(app);

app.use((err, req, res, next) => {
    return res.status(500).json({
        message: err.message
    });
}); 

app.listen(PORT, '0.0.0.0', () => {
    console.info(`Users service listening on ${PORT}`);
});