import routes from "../routes.js";
import Video from "../models/Video";

export const home = async (req, res) => {
	try{
		const videos = await Video.find({}).sort({'_id':1});
		res.render('home', {pageTitle:"Home", videos:videos});
	}catch(error){
		console.log(error);
		res.render('home', {pageTitle:"Home", videos:[]});
	}
};

export const getUpload = (req, res) => {
	res.render('upload', {pageTitle:"upload"});
};
export const postUpload = async (req, res) => {
	const {
		body:{ title, description },
		file: { path }
	} = req;
	const newVideo = await Video.create({
		fileUrl: path,
		title: title,
		description: description
	});
	console.log(newVideo);
	res.redirect(routes.videosDetail(newVideo.id));
};

export const search = async (req, res) => {
	const {
		query:{term:searchingBy}
	}=req;
	let videos = [];
	try{
		videos = await Video.find({ title: {$regex:searchingBy, $options:"i"} });
	}catch(error){
		console.error(error);
	}
	res.render('search', {pageTitle:"search", searchingBy:searchingBy, videos:videos});
};

export const videosDetail = async (req, res) => {
	const {
		params: { id }
	} = req;
	try{
		const video = await Video.findById(id);
		res.render('videosDetail', {pageTitle:video.title, video:video});
	}catch(error){
		res.redirect(routes.home);
	}
};

export const getEditVideo = async (req, res) => {
	const {
		params:{ id }
	} = req;
	try{
		const video = await Video.findById(id);
		res.render('editVideo', {pageTitle:`Edit ${video.title}`, video:video});
	}catch(error){
		res.redirect(routes.home);
	}
};
export const postEditVideo = async (req, res) => {
	const {
		params:{ id },
		body:{ title, description }
	} = req;
	try{
		await Video.findOneAndUpdate({_id:id}, { title, description });
		res.redirect(routes.videosDetail(id));
	}catch(error){
		res.redirect(routes.home);
	}
};

export const deleteVideo = async (req, res) => {
	const {
		params:{ id }
	} = req;
	try{
		await Video.findOneAndRemove({_id:id});
		res.redirect(routes.home);
	}catch(error){
		res.redirect(routes.home);
	}
};