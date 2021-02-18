import dotenv from "dotenv";
import app from "./app";
import "./db";
import "./models/User"
import "./models/Video";
import "./models/Comment";
dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`Listening on PORT : ${PORT}`);
})