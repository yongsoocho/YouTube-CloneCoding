const express = require('express'); //import express from "express";
const app = new express();
const PORT = 4000;

const betweenHome = (req, res, next) => {
	console.log("I'm middleware!");
	next();
}

app.use(betweenHome);

app.get("/", (req, res)=> {
	res.send(`Hello haha!`);
});

app.get("/profile", (req, res) => {
	res.send("This is ma profile!");
});

app.listen(PORT, () => {
	console.log(`Listening on ${PORT} port`);
});