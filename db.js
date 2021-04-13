import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


mongoose.connect(process.env.MONGO_URL, //"mongodb://localhost:27017/yongTube"
	{
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	}
);

const db = mongoose.connection;

const handleOpen = () => {
	console.log("MongoDB is connected! with Atlas!");
}
const handleError = (err) => {
	console.log(`Error !!!!:${err}`);
}

db.once("open", handleOpen);
db.on("error", handleError);