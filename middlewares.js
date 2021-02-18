import routes from "./routes.js";
const multer = require("multer");

export const multerVideo = multer({dest:"uploads/videos/"});

export const localsMiddlewares = (req, res, next) => {
	res.locals.siteName = 'YongTube';
	res.locals.routes = routes;
	res.locals.user = {
	}
	next();
};

export const uploadVideo = multerVideo.single("videoFile");