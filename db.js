import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


mongoose.connect(process.env.MONGO_URL, //"mongodb://localhost:27017/yongTube"
	{
	useNewUrlParser: true,
	useFindAndModify: false
	}
);

const db = mongoose.connection;

const handleOpen = () => {
	console.log("Connected !!!!");
}
const handleError = (err) => {
	console.log(`Error !!!!:${err}`);
}

db.once("open", handleOpen);
db.on("error", handleError);