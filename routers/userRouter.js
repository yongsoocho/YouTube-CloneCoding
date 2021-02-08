const express = require('express'); //import express from "express";
import routes from "../routes.js";
import { users, userDetail, editProfile, changePassword } from "../controllers/userController.js"

export const userRouter = express.Router();

userRouter.get("/", (req, res) => {
	res.send('user index');
});

userRouter.get(routes.editProfile, editProfile);

userRouter.get(routes.changePassword, changePassword);

userRouter.get(routes.userDetail(), userDetail);

userRouter.get("/password", (req, res) => {
	res.send('user password');
});

userRouter.get("/user", (req, res) => {
	res.send('user list');
});