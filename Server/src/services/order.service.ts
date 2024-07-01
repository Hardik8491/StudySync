import { Request, Response, NextFunction } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncError";
import dotenv from "dotenv";

import OrderModel from "../models/order.model";

dotenv.config();

// create order
export const newOrder = CatchAsyncError(
    async (data: any, res: Response, next: NextFunction) => {
        const order = await OrderModel.create(data);
        res.status(201).json({
            success: true,
            order,
        });
    }
);

// get all order
export const getAllOrderService = async (res: Response) => {
    const orders = await OrderModel.find().sort({ createAt: -1 });
    res.status(201).json({
        success: true,
        orders,
    });
};
