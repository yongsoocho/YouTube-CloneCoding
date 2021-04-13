const express = require('express'); //import express from "express";
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const MongoStore = require('connect-mongo');
const passport = require('passport'); 
const mongoose = require('mongoose'); 
const session = require('express-session');
const dotenv = require('dotenv');
const app = new express();
import { userRouter } from "./routers/userRouter.js";
import { videoRouter } from "./routers/videoRouter.js";
import globalRouter from "./routers/globalRouter.js";
import routes from "./routes";
import { localsMiddlewares } from "./middlewares.js"

import "./passport";
//const PORT = 4000;

dotenv.config();

const CookieStore = MongoStore(session);

app.set('view engine', "pug");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("combined"));
app.use("/uploads", express.static("uploads"));
app.use( helmet({ contentSecurityPolicy: false }));//app.use(helmet());
app.use(function(req, res, next) {
	res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
	return next();
});
app.use(session({
	secret:process.env.COOKIE_SECRET,
	resave:true,
	saveUninitialized:false,
	store:new CookieStore({ mongooseConnection: mongoose.connection })
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddlewares);
app.use(routes.home, globalRouter); //app.use("/", globalRouter);
app.use(routes.users, userRouter); //app.use("/users", userRouter);
app.use(routes.videos, videoRouter); //app.use('/videos', videoRouter);

app.use((err, req, res, next) => {
	console.error(err);
	res.send(`error:${err}`);
});
//app.listen(PORT, () => {
	//console.log(`Listening on ${PORT} port`);
//});

export default app;