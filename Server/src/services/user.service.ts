// get user by id

import userModel from "../models/user.model";
import { Response } from "express";
import redisClient from "../utils/redis";

export const getUserById = async (id: string, res: Response) => {
  const userJson = await redisClient.get(id);
  if (!userJson) {
    const user = JSON.parse(userJson as string);
    return res.status(200).json({ success: true, user });
  }
};
