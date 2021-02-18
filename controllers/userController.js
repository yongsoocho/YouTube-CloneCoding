import User from "../models/User.js";
import routes from "../routes.js";


export const getJoin = (req, res, next) => {
	res.render('join', {pageTitle:"Join"});
};
export const postJoin = async (req, res, next) => {
		const {
			body: {name, email, password, password2}
		} = req;
		if(password !== password2){
			res.status(400);
			res.render("join", { pageTitle:"Join"});
		}else{
			try{
				const user = await User({  //User.creat
					name,
					email
				});
				await User.register(user, password);
			}catch(error){
				console.error(error);
				res.send('error page');
			}
		}
		res.redirect(routes.home);
};


export const getLogin = (req, res) => {
	res.render('login', {pageTitle:"Log In"});
};
export const postLogin = (req, res) => {
	res.redirect(routes.home);
};

export const logout = (req, res) => {
	//something
	res.redirect(routes.home);
};

export const editProfile = (req, res) => {
	res.render('editProfile', {pageTitle:"editProfile"});
};

export const changePassword = (req, res) => {
	res.render('changePassword', {pageTitle:"changePassword"});
};

export const userDetail = (req, res) => {
	res.render('profile', {pageTitle:"profile"});
};