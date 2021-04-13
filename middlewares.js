import routes from "./routes.js";
const multer = require("multer");

export const multerVideo = multer({dest:"uploads/videos/"});

export const localsMiddlewares = (req, res, next) => {
	res.locals.siteName = 'YongTube';
	res.locals.routes = routes;
	res.locals.loggedUser = req.user;
	console.log(req.user);
	next();
};

export const onlyPublic = (req, res, next) => {
	if(req.user){
		res.redirect(routes.home);
	}else{
		next();
	}
};
export const onlyPrivate = (req, res, next) => {
	if(req.user){
		next()
	}else{
		res.redirect(routes.home);
	}
};

export const uploadVideo = multerVideo.single("videoFile");