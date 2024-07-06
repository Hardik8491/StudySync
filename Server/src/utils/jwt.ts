import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { Response } from "express";
import { IUser } from "../models/user.model";
import redisClient from "./redis";
import exp from "constants";
import { json } from "stream/consumers";
dotenv.config();

interface ITokenOptions {
    expires: Date;
    maxAge: number;
    httpOnly: boolean;
    sameSite: "lax" | "strict" | "none" | undefined;
    secure?: boolean;
}

// parse environment variables to ingrates with  fallback value
const accessTokenExpires = parseInt(process.env.ACCESS_TOKEN_EXPIRES || "15m");
const refreshTokenExpires = parseInt(process.env.REFRESH_TOKEN_EXPIRES || "1y");

//   options for cookies
export const accessTokenOptions: ITokenOptions = {
    expires: new Date(Date.now() + accessTokenExpires * 60 * 60 * 1000),
    maxAge: accessTokenExpires * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "lax",
};
export const refreshTokenOptions: ITokenOptions = {
    expires: new Date(Date.now() + refreshTokenExpires * 24 * 60 * 60 * 1000),
    maxAge: refreshTokenExpires * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "lax",
};

export const sendToken = (user: IUser, statusCode: number, res: Response) => {
    const accessToken = user.signAccessToken();

    const refreshToken = user.signRefreshToken();
    console.log("aces:-", accessToken);

    // Upload session to redis
    redisClient.set(user._id as string, JSON.stringify(user) as any);

    // only set secure in production
    if (process.env.NODE_ENV === "production") {
        accessTokenOptions.secure = true;
        refreshTokenOptions.secure = true;
    }
    res.cookie("access_token", accessToken, accessTokenOptions);
    res.cookie("refresh_token", refreshToken, refreshTokenOptions);

    res.status(statusCode).json({
        success: true,
        user,
    });
};
