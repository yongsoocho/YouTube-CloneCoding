const express = require('express'); //import express from "express";
import routes from "../routes.js";
import { videosDetail, getEditVideo, postEditVideo, deleteVideo, getUpload, postUpload } from "../controllers/videoController.js"
import { uploadVideo } from "../middlewares.js"

export const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videosDetail(), videosDetail);

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo(), deleteVideo);

//export default videoRouter;