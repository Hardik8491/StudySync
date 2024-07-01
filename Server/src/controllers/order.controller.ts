import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { CatchAsyncError } from "../middleware/catchAsyncError";
import ErrorHandler from "../33/ErrorHandler";
import cloudinary from "cloudinary";
import { create } from "domain";
import { createCourse } from "../services/course.service";
import CourseModel, { ICourse } from "../models/course.model";
import redisClient from "../33/redis";
import mongoose from "mongoose";
import path from "path";
import ejs from "ejs";
import sendMailer from "../mails/sendMail";
import userModel, { IUser } from "../models/user.model";
import { IOrder } from "../models/order.model";
import { getAllOrderService, newOrder } from "../services/order.service";
import NotificationModel from "../models/notification.model";
dotenv.config();

// create order
export const createOrder = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { courseId, payment_info } = req.body as IOrder;
            const user = await userModel.findById(req.user?._id);
            const courseExistUser = user?.courses.some((course: any) => {
                course._id.toString() === courseId;
            });
            if (!courseExistUser) {
                return next(
                    new ErrorHandler(
                        "You hav already purchased this course",
                        400
                    )
                );
            }
            const course = await CourseModel.findById(courseId);
            if (!course) {
                return next(new ErrorHandler("Course not found", 404));
            }
            const data: any = {
                courseId: course._id,
                userId: user?._id,
                payment_info,
            };

            const mailData = {
                order: {
                    _id: (course?._id as string).toString().slice(0, 6),
                    name: course.name,
                    price: course.price,
                    data: new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    }),
                },
            };
            // change accoring need
            const html = await ejs.renderFile(
                path.join(__dirname, "../mails/order-confirm.ejs"),
                {
                    order: mailData,
                }
            );
            try {
                await sendMailer({
                    email: user?.email as string,
                    subject: "Order Confirm",
                    template: "order-confirm.ejs",
                    data: mailData,
                });
            } catch (error: any) {
                return next(new ErrorHandler(error.message, 500));
            }
            user?.courses.push(course?._id as any);
            await user?.save();
            const notification = await NotificationModel.create({
                user: user?._id,
                title: "New Order",
                message: `You have a new order from ${course?.name}`,
            });
            if (course.purchased) {
                course.purchased ? (course.purchased += 1) : course.purchased;
            }
            await course.save();
            newOrder(data, res, next);
        } catch (error: any) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
);

// get all order

export const getAllOrder = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            getAllOrderService(res);
        } catch (error: any) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
);
