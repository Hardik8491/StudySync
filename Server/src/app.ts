import express, { NextFunction, Request, Response } from "express";
import env from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error";
import userRouter from "./routes/user.routes";
import courseRouter from "./routes/course.routes";
import orderRouter from "./routes/order.router";
import notificationRoute from "./routes/notification.route";
import analyticsRouter from "./routes/analytics.route";
// export app
export const app = express();

// body-parser
app.use(express.json({ limit: "50mb" }));

// cookie parser
app.use(cookieParser());

// cors
app.use(
    cors({
        origin: process.env.ORIGIN,
        credentials: true,
    })
);

// testing route

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.status(200).json({ message: "Request Send", success: true });
    } catch (error) {
        res.send(error);
    }
});

// routes
app.use(
    "/api/v1",
    userRouter,
    orderRouter,
    courseRouter,
    notificationRoute,
    analyticsRouter
);

//unknown routes
app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error(`Not found - ${req.originalUrl}`) as any;
    error.status = 404;
    next(error);
});

app.use(ErrorMiddleware);
