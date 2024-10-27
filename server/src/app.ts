import express, { NextFunction, Request, Response } from "express";
import env from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error";
import userRouter from "./routes/user.routes";
import courseRouter from "./routes/course.router";
import orderRouter from "./routes/order.router";
import notificationRoute from "./routes/notification.route";
import analyticsRouter from "./routes/analytics.router";
import layoutRouter from "./routes/layout.router";

// export app
export const app = express();




app.use(cors({
    origin:'*', 
    credentials:true, 
  methods: ['POST'], // Specify allowed methods
}));

  

// body-parser
app.use(express.json({ limit: "50mb" }));

// cookie parser
app.use(cookieParser());


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
    analyticsRouter,
    layoutRouter,
);

//unknown routes
app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error(`Not found - ${req.originalUrl}`) as any;
    error.status = 404;
    next(error);
});

app.use(ErrorMiddleware);
