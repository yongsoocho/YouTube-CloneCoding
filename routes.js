//global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";


//users
const USERS = "/users";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const USER_DETAIL = "/:id";
<<<<<<< HEAD
const ME = "/me";	
=======
>>>>>>> 0e4c58247d31f339d15c50446df494aa30527f62

//videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEOS_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

<<<<<<< HEAD
//GITHUB
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

=======
>>>>>>> 0e4c58247d31f339d15c50446df494aa30527f62
const routes = {
	home: HOME,
	join: JOIN,
	login: LOGIN,
	logout: LOGOUT,
	search: SEARCH,
	users: USERS,
	userDetail: (id) => {
		if(id){
			return `/users/${id}`;
		}else{
			return USER_DETAIL;
		}
	},
	editProfile: EDIT_PROFILE,
	changePassword: CHANGE_PASSWORD,
	videos: VIDEOS,
	upload: UPLOAD,
	videosDetail: (id) => {
		if(id){
			return `/videos/${id}`;
		}else{
			return VIDEOS_DETAIL;
		}
	},
	editVideo: (id) => {
		if(id){
			return `/videos/${id}/edit`;
		}else{
			return EDIT_VIDEO;
		}
	},
	deleteVideo: (id) => {
		if(id){
			return `/videos/${id}/delete`;
		}else{
			return DELETE_VIDEO;
		}
<<<<<<< HEAD
	},
	github:GITHUB,
	githubCallback:GITHUB_CALLBACK,
	me:ME
=======
	}
>>>>>>> 0e4c58247d31f339d15c50446df494aa30527f62
};

export default routes;