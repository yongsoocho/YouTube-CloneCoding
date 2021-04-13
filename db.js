import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


mongoose.connect(process.env.MONGO_URL, //"mongodb://localhost:27017/yongTube"
	{
<<<<<<< HEAD
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true
=======
	useNewUrlParser: true,
	useFindAndModify: false
>>>>>>> 0e4c58247d31f339d15c50446df494aa30527f62
	}
);

const db = mongoose.connection;

const handleOpen = () => {
<<<<<<< HEAD
	console.log("MongoDB is connected! with Atlas!");
=======
	console.log("Connected !!!!");
>>>>>>> 0e4c58247d31f339d15c50446df494aa30527f62
}
const handleError = (err) => {
	console.log(`Error !!!!:${err}`);
}

db.once("open", handleOpen);
db.on("error", handleError);