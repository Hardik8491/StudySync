import { Request, Response, NextFunction } from "express";
import UserModel, { IUser } from "../models/user.model";
import { CatchAsyncError } from "../middleware/catchAsyncError";
import ErrorHandler from "../33/ErrorHandler";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
import redisClient from "../33/redis";
import CourseModel from "../models/course.model";

dotenv.config();

// create course
export const createCourse = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        const course = await CourseModel.create(req.body);
        res.status(201).json({
            success: true,
            course,
        });
    }
);

// get all course
export const getAllCourseService = async (res: Response) => {
    const courses = await CourseModel.find().sort({ createAt: -1 });
    res.status(201).json({
        success: true,
        courses,
    });
};
