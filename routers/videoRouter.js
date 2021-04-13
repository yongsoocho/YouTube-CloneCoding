const express = require('express'); //import express from "express";
import routes from "../routes.js";
<<<<<<< HEAD
import { onlyPrivate } from "../middlewares.js";
=======
>>>>>>> 0e4c58247d31f339d15c50446df494aa30527f62
import { videosDetail, getEditVideo, postEditVideo, deleteVideo, getUpload, postUpload } from "../controllers/videoController.js"
import { uploadVideo } from "../middlewares.js"

export const videoRouter = express.Router();

<<<<<<< HEAD
videoRouter.get(routes.upload, onlyPrivate, getUpload);
=======
videoRouter.get(routes.upload, getUpload);
>>>>>>> 0e4c58247d31f339d15c50446df494aa30527f62
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videosDetail(), videosDetail);

<<<<<<< HEAD
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);
=======
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo(), deleteVideo);
>>>>>>> 0e4c58247d31f339d15c50446df494aa30527f62

//export default videoRouter;