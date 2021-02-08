const express = require('express'); //import express from "express";
import routes from "../routes.js";
import { videosDetail, editVideo, deleteVideo, getUpload, postUpload } from "../controllers/videoController.js"

export const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);

videoRouter.get(routes.videosDetail(), videosDetail);

videoRouter.get(routes.editVideo, editVideo);

videoRouter.get(routes.deleteVideo, deleteVideo);

//export default videoRouter;