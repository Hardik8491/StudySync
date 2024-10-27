import { Request, Response, NextFunction } from "express";
import UserModel, { IUser } from "../models/user.model";
import { CatchAsyncError } from "../middleware/catchAsyncError";
import ErrorHandler from "../utils/ErrorHandler";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import ejs from "ejs";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
import path from "path";
import sendMailer from "../mails/sendMail";
import {
  accessTokenOptions,
  refreshTokenOptions,
  sendToken,
} from "../utils/jwt";
import redisClient from "../utils/redis";
import {
  getAllUserService,
  getUserById,
  updateUserRoleService,
} from "../services/user.service";
import userModel from "../models/user.model";
import exp from "constants";
import { request } from "https";
dotenv.config();

// register user
interface IRegistrationBody {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  role?: string;
}

export const registrationUser = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password }: IRegistrationBody = req.body;

      const isEmailExist = await UserModel.findOne({ email });
      if (isEmailExist) {
        return next(new ErrorHandler("Email already exists", 400));
      }
      const user: IRegistrationBody = {
        name,
        email,
        password,
      };
      const activationToken = createActivationToken(user);
      const activationCode = activationToken.activationCode;
      const data = { user: { name, email }, activationCode };
      const html = await ejs.renderFile(
        path.join(__dirname, "../mails/activation-mail.ejs"),
        data
      ); // create email template

      try {
        await sendMailer({
          email,
          subject: "Account Activation",
          template: "activation-mail.ejs",
          data: { name, activationCode },
        });
        res.status(201).json({
          success: true,
          message: "Account activation email has been sent to your email",
          activationToken: activationToken.token,
        });
      } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
      }
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

interface IActivationToken {
  token: string;
  activationCode: string;
}

export const createActivationToken = (user: any): IActivationToken => {
  const activationCode = Math.floor(1000 + Math.random() * 9000).toString();
  const token = jwt.sign(
    { user, activationCode },
    process.env.ACTIVATION_SECRET as Secret,
    {
      expiresIn: "5m",
    }
  );
  return { token, activationCode };
};

// activate user
interface IActivationRequest {
  activationCode: string;
  activationToken: string;
}

export const activationUser = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { activationCode, activationToken }: IActivationRequest = req.body;

      const decoded = jwt.verify(
        activationToken,
        process.env.ACTIVATION_SECRET as Secret
      ) as { user: IUser; activationCode: string };

      if (activationCode !== decoded.activationCode) {
        return next(new ErrorHandler("Invalid activation code", 400));
      }

      const { name, email, password } = decoded.user;
      if (!name || !email || !password) {
        return next(new ErrorHandler("Invalid activation token", 400));
      }
      const existUser = await UserModel.findOne({ email });
      if (existUser) {
        return next(new ErrorHandler("User already exists", 400));
      }

      const user = await UserModel.create(decoded.user);

      res.status(201).json({
        success: true,
        message: "Account has been activated",
        user,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

// login user
interface ILoginRequest {
  email: string;
  password: string;
}

export const loginUser = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password }: ILoginRequest = req.body;
      if (!email || !password) {
        return next(new ErrorHandler("Please enter email and password", 400));
      }

      const user = await UserModel.findOne({ email }).select("+password");
      if (!user) {
        return next(new ErrorHandler("Invalid email or password", 400));
      }
      const isPasswordMatch = await user.comparePassword(password);
      if (!isPasswordMatch) {
        return next(new ErrorHandler("Invalid email or password", 400));
      }

      sendToken(user, 200, res);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

// logout user
export const logoutUser = CatchAsyncError(
  (req: Request, res: Response, next: NextFunction) => {
    try {
      res.clearCookie("access_token", { maxAge: 1 });
      res.clearCookie("refresh_token", { maxAge: 1 });
      const userId = (req as any).user?._id || "";
      redisClient.del(userId as string);
      res.status(200).json({
        success: true,
        message: "Logged out successfully",
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);
// update access token
export const updateAccessToken = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const refresh_token = req.cookies.refresh_token as string;
      const decode = jwt.verify(
        refresh_token,
        process.env.REFRESH_TOKEN as string
      ) as JwtPayload;
      const message = "Could not refresh token";
      if (!decode) {
        return next(new ErrorHandler(message, 404));
      }

      const session = await redisClient.get(decode.id as string);
      if (!session) {
        return next(
          new ErrorHandler("please login for access this resource", 400)
        );
      }
      const user = JSON.parse(session);
      const accessToken = jwt.sign(
        { id: user._id },
        process.env.ACCESS_TOKEN as string,
        {
          expiresIn: "15m",
        }
      );
      const refreshToken = jwt.sign(
        { id: user._id },
        process.env.REFRESH_TOKEN as string,
        {
          expiresIn: "3d",
        }
      );
      // Upload session to redis
      (req as any).user = user;

      res.cookie("access_token", accessToken, accessTokenOptions);
      res.cookie("refresh_token", refreshToken, refreshTokenOptions);
      await redisClient.set(user._id, JSON.stringify(user), "EX", 604800); //7 days
      res.status(200).json({
        status: "success",
        accessToken,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

// get user info
export const getUserInfo = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = (req as any).user?._id as string;
      getUserById(userId, res);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);
interface ISocialAuthBody {
  email: string;
  name: string;
  avatar: string;
}

// social auth
export const socialAuth = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, name, avatar } = req.body as ISocialAuthBody;
      const user = await userModel.findOne({ email });
      if (!user) {
        const newUser = await userModel.create({ email, name, avatar });
        sendToken(newUser, 200, res);
      } else {
        sendToken(user, 200, res);
      }
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

// login user
interface IUpdateUserInfo {
  email?: string;
  name?: string;
  bio?: string;
  location?: string;
  website?: string;
  publicName?: string;
  publicEmail?: string;
  description?: string;
  publicLocation?: string;
  publicWebsite?: string;
}

export const updateUserInfo = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        name,
        email,
        bio,
        location,
        website,
        publicName,
        publicEmail,
        description,
        publicLocation,
        publicWebsite,
      } = req.body as IUpdateUserInfo;

      console.log(name, email, bio, location, website, publicName, publicEmail, description, publicLocation, publicWebsite);
      
      const userId = (req as any).user?._id as string;
      const user = await userModel.findById(userId);
      if (!user) {
        return next(new ErrorHandler("User not found", 400));
      }

      // Check and update unique email
      if (email && user) {
        const isEmailExist = await userModel.findOne({ email });
        if (isEmailExist && isEmailExist.id.toString() !== userId) {
          return next(new ErrorHandler("Email already exists", 400));
        }
        user.email = email;
      }

      // Update fields if provided
      if (name) user.name = name;
      if (bio) user.bio = bio;
      if (location) user.location = location;
      if (website) user.website = website;
      if (publicName) user.publicName = publicName;

      // Check and update unique public email
      if (publicEmail) {
        const isPublicEmailExist = await userModel.findOne({ publicEmail });
        if (isPublicEmailExist && isPublicEmailExist.id.toString() !== userId) {
          return next(new ErrorHandler("Public email already exists", 400));
        }
        user.publicEmail = publicEmail;
      }

      // Update additional public profile fields
      if (description) user.description = description;
      if (publicLocation) user.publicLocation = publicLocation;
      if (publicWebsite) user.publicWebsite = publicWebsite;

      await user.save();
      await redisClient.set(userId, JSON.stringify(user));

      res.status(201).json({
        success: true,
        message: "User info updated successfully",
        user,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);


// update user password
interface IUpdatePassword {
  currentPassword: string;
  newPassword: string;
}

export const updateUserPassword = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { currentPassword, newPassword }: IUpdatePassword = req.body;
      if (!currentPassword || !newPassword) {
        return next(new ErrorHandler("Please enter all fields", 400));
      }

      const user = await UserModel.findById((req as any).user?._id).select(
        "+password"
      );
      if (!user) {
        return next(new ErrorHandler("User not found", 400));
      }

      if (user.password == undefined) {
        return next(new ErrorHandler("Invalid old password", 400));
      }

      const isPasswordMatch = await user.comparePassword(currentPassword);
      if (!isPasswordMatch) {
        return next(new ErrorHandler("Invalid password", 400));
      }
      user.password = newPassword;
      await user.save();
      await redisClient.set(user._id as string, JSON.stringify(user));

      res.status(201).json({
        success: true,
        message: "Password updated successfully",
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

// update profile picture
interface IUpdateProfilePicture {
  avatar: string;
}
export const updateProfilePicture = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { avatar }: IUpdateProfilePicture = req.body;

      const userId = (req as any).user?._id as string;
      const user = await UserModel.findById(userId);

      if (!user) {
        return next(new ErrorHandler("User not found", 400));
      }
      if (avatar && user) {
        // if user have one avar then call this if
        if (user.avatar?.public_id) {
          const image_id = user.avatar.public_id;
          // first delete the old images
          await cloudinary.v2.uploader.destroy(image_id);
          const myCloud = await cloudinary.v2.uploader.upload(avatar, {
            folder: "avatars",
            width: 150,
            crop: "scale",
          });
          console.log(myCloud);

          user.avatar = {
            public_id: myCloud.public_id,
            url: myCloud.url,
          };
          console.log(user.avatar);
        } else {
          const myCloud = await cloudinary.v2.uploader.upload(avatar, {
            folder: "avatars",
            width: 150,
            crop: "scale",
          });
          console.log(myCloud);

          user.avatar = {
            public_id: myCloud.public_id,
            url: myCloud.url,
          };
          console.log(user.avatar);
        }
      }

      await user.save();
      await redisClient.set(userId as string, JSON.stringify(user));

      res.status(201).json({
        success: true,
        message: "Profile picture updated successfully",
        user,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

// get all user --only admin

export const getAllUser = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      getAllUserService(res);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

//update user role --only for admin

export const updateUserRole = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id, role } = req.body;

      updateUserRoleService(res, id, role);
      // res.status(201).json({
      //     success: true,
      //     message: "Profile picture updated successfully",

      // });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

// Delete User --only for admin
export const deleteUser = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const user = await userModel.findById(id);
      if (!user) {
        return next(new ErrorHandler("User not found", 404));
      }
      await user.deleteOne({ id });
      await redisClient.del(id);
      res.status(200).json({
        success: true,
        message: "User delete successfully",
        user,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);
