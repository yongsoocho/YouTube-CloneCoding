const express = require('express');
import routes from "../routes.js";
import passport from "passport";
import { onlyPublic } from "../middlewares.js";
import { home, search, upload, videoDetail, editVideo, deleteVideo } from "../controllers/videoController.js";
import { getJoin, postJoin, login, logout, getLogin, postLogin, githubLogin, githubLoginCallback , postGithubLogin, getMe } from "../controllers/userController.js";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.logout, logout);

globalRouter.get(routes.search, search);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(routes.githubCallback, 
				 passport.authenticate('github', {failureRedirect:"/login", successRedirect:"/"}),
				 postGithubLogin
);

globalRouter.get(routes.me, getMe);

export default globalRouter;