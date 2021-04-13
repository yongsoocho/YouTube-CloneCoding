import passport from "passport";
<<<<<<< HEAD
import dotenv from "dotenv";
import User from "./models/User";
import routes from "./routes.js";
import GithubStrategy from "passport-github";
import { githubLoginCallback } from "./controllers/userController.js";

dotenv.config()

passport.use(User.createStrategy());

passport.use(new GithubStrategy(
		{
			clientID:process.env.GITHUB_ID,
			clientSecret:process.env.GITHUB_SECRET,
			callbackURL:`https://testingtube.run.goorm.io:4000/auth/github/callback`
		},
		githubLoginCallback
	)
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


export default passport;
=======
import User from "./models/User";

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
>>>>>>> 0e4c58247d31f339d15c50446df494aa30527f62
