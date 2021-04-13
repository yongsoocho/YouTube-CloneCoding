const express = require('express'); //import express from "express";
import routes from "../routes.js";
import { onlyPrivate } from "../middlewares.js";
import { users, userDetail, editProfile, changePassword } from "../controllers/userController.js"

export const userRouter = express.Router();

userRouter.get("/", (req, res) => {
	res.send('user index');
});

userRouter.get(routes.editProfile, onlyPrivate, editProfile);

userRouter.get(routes.changePassword, onlyPrivate, changePassword);

userRouter.get(routes.userDetail(), onlyPrivate, userDetail);

userRouter.get("/password", (req, res) => {
	res.send('user password');
});

userRouter.get("/user", (req, res) => {
	res.send('user list');
});