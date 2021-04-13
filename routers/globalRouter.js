const express = require('express');
import routes from "../routes.js";
<<<<<<< HEAD
import passport from "passport";
import { onlyPublic } from "../middlewares.js";
import { home, search, upload, videoDetail, editVideo, deleteVideo } from "../controllers/videoController.js";
import { getJoin, postJoin, login, logout, getLogin, postLogin, githubLogin, githubLoginCallback , postGithubLogin, getMe } from "../controllers/userController.js";
=======
import { home, search, upload, videoDetail, editVideo, deleteVideo } from "../controllers/videoController.js";
import { getJoin, postJoin, login, logout, getLogin, postLogin } from "../controllers/userController.js";
>>>>>>> 0e4c58247d31f339d15c50446df494aa30527f62

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

<<<<<<< HEAD
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);
=======
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
>>>>>>> 0e4c58247d31f339d15c50446df494aa30527f62

globalRouter.get(routes.logout, logout);

globalRouter.get(routes.search, search);

<<<<<<< HEAD
globalRouter.get(routes.github, githubLogin);
globalRouter.get(routes.githubCallback, 
				 passport.authenticate('github', {failureRedirect:"/login", successRedirect:"/"}),
				 postGithubLogin
);

globalRouter.get(routes.me, getMe);

=======
>>>>>>> 0e4c58247d31f339d15c50446df494aa30527f62
export default globalRouter;