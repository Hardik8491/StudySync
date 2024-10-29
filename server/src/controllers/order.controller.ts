import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { CatchAsyncError } from "../middleware/catchAsyncError";
import ErrorHandler from "../utils/ErrorHandler";
import cloudinary from "cloudinary";
import { create } from "domain";
import { createCourse } from "../services/course.service";
import CourseModel, { ICourse } from "../models/course.model";
import redisClient from "../utils/redis";
import mongoose from "mongoose";
import path from "path";
import ejs from "ejs";
import sendMailer from "../mails/sendMail";
import userModel, { IUser } from "../models/user.model";
import { IOrder } from "../models/order.model";
import { getAllOrderService, newOrder } from "../services/order.service";
import NotificationModel from "../models/notification.model";
import Stripe from "stripe";
import { idText } from "typescript";
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-09-30.acacia",
  typescript: true,
});

interface Item {
  //course
  id: string;
  // title: string;
  // price: number;
  // quantity: number;
}

interface Course {
  _id: string;
  title: string;
  price: number;
  purchased?: number;
}

interface User {
  _id: string;
  email: string;
  courses: Course[];
  save: () => Promise<void>;
}
// create order
export const createOrder = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { items } = req.body as { items: Item[] };

      const userId = req.user?._id as string;

      const user = (await userModel.findById(userId)) as User | null;
      if (!user) {
        return next(new ErrorHandler("User not found", 404));
      }

      const courseIds: string[] = items.map((item: Item) => item.id);

  

      const purchasedCourses = user.courses.map((course) =>
        course._id.toString()
      );
  

      const alreadyPurchasedCourses = courseIds.filter((courseId) =>
        purchasedCourses.includes(courseId)
      );
      if (alreadyPurchasedCourses.length > 0) {
        return next(
          new ErrorHandler(
            `You have already purchased the following courses: ${alreadyPurchasedCourses.join(
              ", "
            )}`,
            400
          )
        );
      }
      console.log("c", courseIds);

      const courses = (await CourseModel.find({
        _id: { $in: courseIds },
      })) as Course[];
  

      if (courses.length !== courseIds.length) {
        return next(new ErrorHandler("One or more courses not found", 404));
      }

      const lineItems = courses.map((item) => ({
        price_data: {
          currency: "inr",
          product_data: { name: item.title },
          unit_amount: item.price * 100,
        },
        quantity: 1,
      }));

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: `${process.env.FRONTEND_URL}/checkout/success`,
        cancel_url: `${process.env.FRONTEND_URL}/checkout/cancel`,
        shipping_address_collection: {
          allowed_countries: ["IN"],
        },
      });

      const data = {
        userId,
        courseIds,
        payment_info: session.id,
      };

      const mailData = courses.map((course) => ({
        order: {
          _id: course._id.toString().slice(0, 6),
          name: course.title,
          price: course.price,
          date: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        },
      }));

      for (const courseMailData of mailData) {
        const html = await ejs.renderFile(
          path.join(__dirname, "../mails/order-confirm.ejs"),
          { order: courseMailData }
        );
        console.log(html);

        try {
          const res=await sendMailer({
            email: user.email,
            subject: "Order Confirm",
            template: "order-confirm.ejs",
            data: courseMailData,
          });

        } catch (error) {
          return next(new ErrorHandler((error as Error).message, 500));
        }
      }

      courses.forEach((course) => {
        user.courses.push(course);
        course.purchased = (course.purchased || 0) + 1;
      });

      await user.save();
      await CourseModel.bulkWrite(
        courses.map((course) => ({
          updateOne: {
            filter: { _id: course._id },
            update: { purchased: course.purchased },
          },
        }))
      );

      await NotificationModel.create({
        user: userId,
        title: "New Order",
        message: `You have a new order for ${courses
          .map((course) => course.title)
          .join(", ")}`,
      });

      newOrder(session, data, res, next);
     
    } catch (error) {
      return next(new ErrorHandler((error as Error).message, 500));
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
