import express, { Router } from "express";

import { authorizeRole, isAuthenticated } from "../middleware/auth";
import { createOrder } from "../controllers/order.controller";
import exp from "constants";
const orderRouter = express.Router();
orderRouter.post("/create-order", isAuthenticated, createOrder);
export default orderRouter;
