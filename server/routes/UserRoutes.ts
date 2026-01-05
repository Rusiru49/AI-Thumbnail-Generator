import express from "express";
import { getThumbnailById, getUsersThumbnails } from "../controllers/UserController.js";


const UserRoutes = express.Router();

UserRoutes.get('/thumbnails', getUsersThumbnails)
UserRoutes.get('/thumbnails/:id', getThumbnailById)

export default UserRoutes;