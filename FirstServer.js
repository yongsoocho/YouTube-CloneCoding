const express = require('express');
const app = new express();
const PORT = 4000;

app.get("/", (req, res)=> {
	res.send(`Hello haha!`);
});

app.get("/profile", (req, res) => {
	res.send("This is ma profile!");
});

app.listen(PORT, () => {
	console.log(`Listening on ${PORT} port`);
});