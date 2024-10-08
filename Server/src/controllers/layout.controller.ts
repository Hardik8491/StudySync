import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import { CatchAsyncError } from "../middleware/catchAsyncError";
import LayoutModel from "../models/layout.model";
import cloudinary from "cloudinary";
// create a new layout
export const createLayout = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { type } = req.body;
            if (!type) {
                return next(new ErrorHandler("Type is required", 400));
            }
            const isTypeExist = await LayoutModel.findOne({ type });
            if (!isTypeExist) {
                return next(new ErrorHandler(`${type} is already exist`, 400));
            }
            if (type === "Banner") {
                const { image, title, subtitle } = req.body;
                await LayoutModel.create({
                    banner: {
                        image,
                        title,
                        subtitle,
                    },
                });
                const myCloud = await cloudinary.v2.uploader.upload(image, {
                    folder: "layout",
                });

                const banner = {
                    image: {
                        public_id: myCloud.public_id,
                        url: myCloud.secure_url,
                    },
                    title,
                    subtitle,
                };
                await LayoutModel.create(banner);
            }
            if (type === "FAQ") {
                const { faq } = req.body;
                const FaqItem = await Promise.all(
                    faq.map(async (item: any) => {
                        return {
                            question: item.question,
                            answer: item.answer,
                        };
                    })
                );
                await LayoutModel.create({ type: "FAQ", FaqItem });
            }
            if (type === "Categories") {
                const { categories } = req.body;
                const categoriesItem = await Promise.all(
                    categories.map(async (item: any) => {
                        return {
                            title: item.title,
                        };
                    })
                );
                await LayoutModel.create({
                    type: "Categories",
                    categories: categoriesItem,
                });
            }

            res.status(200).json({
                success: true,
                message: "Layout created",
            });
        } catch (error: any) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
);

//  edit layout

export const editLayout = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { type } = req.body;

            if (type === "Banner") {
                const bannerData: any = await LayoutModel.findOne({
                    type: "Banner",
                });
                const { image, title, subtitle } = req.body;
                if (bannerData) {
                    await cloudinary.v2.uploader.destroy(
                        bannerData.image.public_id
                    );
                }
                const myCloud = await cloudinary.v2.uploader.upload(image, {
                    folder: "layout",
                });

                const banner = {
                    image: {
                        public_id: myCloud.public_id,
                        url: myCloud.secure_url,
                    },
                    title,
                    subtitle,
                };
                await LayoutModel.findByIdAndUpdate(bannerData?._id, {
                    banner,
                });
            }
            if (type === "FAQ") {
                const { faq } = req.body;
                const FaqItems = await LayoutModel.findOne({ type: "FAQ" });
                const FaqItem = await Promise.all(
                    faq.map(async (item: any) => {
                        return {
                            question: item.question,
                            answer: item.answer,
                        };
                    })
                );
                await LayoutModel.findByIdAndUpdate(FaqItems?._id, {
                    type: "FAQ",
                    FaqItem,
                });
            }
            if (type === "Categories") {
                const { categories } = req.body;
                const categoriesItems = await LayoutModel.findOne({
                    type: "FAQ",
                });
                const categoriesItem = await Promise.all(
                    categories.map(async (item: any) => {
                        return {
                            title: item.title,
                        };
                    })
                );
                await LayoutModel.findByIdAndUpdate(categoriesItems?._id, {
                    type: "Categories",
                    categories: categoriesItem,
                });
            }

            res.status(200).json({
                success: true,
                message: "Layout update successfully",
            });
        } catch (error: any) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
);

// get layout by type

export const getLayoutByType = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { type } = req.body;

            const layout = await LayoutModel.findOne({ type });
            res.status(200).json({
                success: true,
                message: "Layout update successfully",
                layout,
            });
        } catch (error: any) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
);
