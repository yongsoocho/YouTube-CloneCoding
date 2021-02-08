import routes from "./routes.js";

export const localsMiddlewares = (req, res, next) => {
	res.locals.siteName = 'YongTube';
	res.locals.routes = routes;
	res.locals.user = {
		isAuthenticated:true,
		id: 1
	}
	next();
};