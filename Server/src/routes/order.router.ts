import express, { Router } from "express";

import { authorizeRole, isAuthenticated } from "../middleware/auth";
import { createOrder, getAllOrder } from "../controllers/order.controller";
import exp from "constants";
const orderRouter = express.Router();
orderRouter.post("/create-order", isAuthenticated, createOrder);
orderRouter.get(
    "/get-orders",
    isAuthenticated,
    authorizeRole("admin"),
    getAllOrder
);
export default orderRouter;
