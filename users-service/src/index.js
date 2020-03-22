import '@babel/polyfill';
import connectToDb from '#root/db/connection.js';
import '#root/server/startServer.js';

connectToDb();