import mongoose from "mongoose";
import Video from "../models/Video";

const CommentSchema = new mongoose.Schema({
	text:{
		type:String,
		required:"Text is required"
	},
	createdAt:{
		type:Date,
		default:Date.now
	}
	// video:{
	// 	type:mongoose.Schema.Types.ObjectIdm,
	// 	ref: "Video"
	// }
});

const model = mongoose.model("Comment", CommentSchema);

export default model;