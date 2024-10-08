import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

import { CatchAsyncError } from "../middleware/catchAsyncError";
import ErrorHandler from "../utils/ErrorHandler";
import cloudinary from "cloudinary";
import { create } from "domain";
import { createCourse } from "../services/course.service";
import CourseModel from "../models/course.model";
import redisClient from "../utils/redis";
import mongoose from "mongoose";
import path from "path";
import ejs from "ejs";
import sendMailer from "../mails/sendMail";
import NotificationModel from "../models/notification.model";
dotenv.config();
//get all notification --only admin
export const getNotification = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const notification = await NotificationModel.find().sort({
                createdAt: -1,
            });
            return res.status(200).json({
                success: true,
                notification,
            });
        } catch (error: any) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
);

// update notification --only admin

export const updateNotification = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const notification = await NotificationModel.findById(
                req.params.id
            );
            if (!notification) {
                return next(new ErrorHandler("Notification not found", 404));
            }
            await notification.save();
            const notifications = await NotificationModel.find().sort({
                createdAt: -1,
            });
            return res.status(200).json({
                success: true,
                notifications,
            });
        } catch (error: any) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
);

// // delete notification --only admin
// cron.schedule("0 0 * * *", async () => {
//     try {
//         const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
//         await NotificationModel.deleteMany({
//             status: "read",
//             cratedAt: { $lt: thirtyDaysAgo },
//         });
//     } catch (error: any) {
//         console.log(error);
//     }
// });
