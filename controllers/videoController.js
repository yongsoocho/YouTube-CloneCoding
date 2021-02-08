import { videos } from "../fakeDB.js";
import routes from "../routes.js";

export const home = (req, res) => {
	res.render('home', {pageTitle:"Home", videos:videos});
};

export const getUpload = (req, res) => {
	res.render('upload', {pageTitle:"upload"});
};
export const postUpload = (req, res) => {
	const {
		body:{file, title, description}
	} = req;
	res.redirect(routes.videosDetail(12345));
};

export const search = (req, res) => {
	//const searchingBy = req.query.term;
	const {query:{term:searchingBy}} = req;
	res.render('search', {pageTitle:"search", searchingBy:searchingBy, videos:videos});
};

export const videosDetail = (req, res) => {
	res.render('videosDetail', {pageTitle:"videosDetail"});
};

export const editVideo = (req, res) => {
	res.render('editVideo', {pageTitle:"editVideo"});
};

export const deleteVideo = (req, res) => {
	res.render('deleteVideo', {pageTitle:"deleteVideo"});
};