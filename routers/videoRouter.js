const express = require('express'); //import express from "express";
import routes from "../routes.js";
import { onlyPrivate } from "../middlewares.js";
import { videosDetail, getEditVideo, postEditVideo, deleteVideo, getUpload, postUpload } from "../controllers/videoController.js"
import { uploadVideo } from "../middlewares.js"

export const videoRouter = express.Router();

videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videosDetail(), videosDetail);

videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

//export default videoRouter;