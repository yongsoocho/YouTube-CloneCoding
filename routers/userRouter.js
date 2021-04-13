const express = require('express'); //import express from "express";
import routes from "../routes.js";
<<<<<<< HEAD
import { onlyPrivate } from "../middlewares.js";
=======
>>>>>>> 0e4c58247d31f339d15c50446df494aa30527f62
import { users, userDetail, editProfile, changePassword } from "../controllers/userController.js"

export const userRouter = express.Router();

userRouter.get("/", (req, res) => {
	res.send('user index');
});

<<<<<<< HEAD
userRouter.get(routes.editProfile, onlyPrivate, editProfile);

userRouter.get(routes.changePassword, onlyPrivate, changePassword);

userRouter.get(routes.userDetail(), onlyPrivate, userDetail);
=======
userRouter.get(routes.editProfile, editProfile);

userRouter.get(routes.changePassword, changePassword);

userRouter.get(routes.userDetail(), userDetail);
>>>>>>> 0e4c58247d31f339d15c50446df494aa30527f62

userRouter.get("/password", (req, res) => {
	res.send('user password');
});

userRouter.get("/user", (req, res) => {
	res.send('user list');
});