import express from "express";
import {
    getNotification,
    updateNotification,
} from "../controllers/notification.controller";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
const notificationRoute = express.Router();

notificationRoute.get("/get-all-notification", getNotification);
notificationRoute.get(
    "/update-notification/:id",
    isAuthenticated,
    authorizeRole("admin"),
    updateNotification
);

export default notificationRoute;
