import passport from "passport";
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
				next();
			}catch(error){
				console.error(error);
				res.redirect(routes.home);
			}
		}
};

export const getLogin = (req, res) => {
	res.render('login', {pageTitle:"Log In"});
};
export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home
});

export const githubLogin = passport.authenticate('github');
export const githubLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { id, avatar_url, name, email }
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl: avatar_url
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};
export const postGithubLogin = (req, res) => {
	res.redirect(routes.home);
};



export const logout = (req, res) => {
	//something
	req.logout();
	res.redirect(routes.home);
};

export const editProfile = (req, res) => {
	res.render('editProfile', {pageTitle:"editProfile"});
};

export const changePassword = (req, res) => {
	res.render('changePassword', {pageTitle:"changePassword"});
};

export const getMe = (req, res) => {
	res.render('userDetail', {pageTitle:"userDetail", user: req.user});
};
export const userDetail = async (req, res) => {
	const { params: { id } } = req;
	try{
		const user = await User.findById({id});
		res.render('userDetail', {pageTitle:"userDetail", user });
	}catch(error){
		res.redirect(routes.home);
	}
};