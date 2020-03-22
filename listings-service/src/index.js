import "@babel/polyfill";
import "#root/server/startServer.js";
import connectToDb from "#root/db/connection.js";

connectToDb();