// instructorController.ts

import { NextFunction, Request, Response } from 'express';
import userModel from '../models/user.model';
import instructorModel from '../models/instructorModel';

import ErrorHandler from "../utils/ErrorHandler";
import { CatchAsyncError } from '../middleware/catchAsyncError';
// Create a new instructor
export const createInstructor = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { userId, certification, experienceYears, bio, profilePhotoUrl } = req.body;
    
            // Ensure the user exists and is an instructor
            const user = await userModel.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found or not an instructor' });
            }
    
            const instructor = new instructorModel({
                userId,
                certification,
                experienceYears,
                bio,
                profilePhotoUrl
            });
    
            const savedInstructor = await instructor.save();
            res.status(201).json(savedInstructor);
        } catch (error:any) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
)

// Get an instructor by ID
export const getInstructorById =CatchAsyncError(
    async (req: Request, res: Response,next: NextFunction) => {
        try {
            const { id } = req.params;
            const instructor = await instructorModel.findById(id).populate('userId', 'name email');
            
            if (!instructor) {
                return res.status(404).json({ message: 'Instructor not found' });
            }
    
            res.json(instructor);
        } catch (error:any) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
)

// Update an instructor's details
export const updateInstructor = CatchAsyncError(
    async (req: Request, res: Response,next: NextFunction) => {
        try {
            const { id } = req.params;
            const updates = req.body;
    
            const instructor = await instructorModel.findByIdAndUpdate(id, updates, { new: true });
            if (!instructor) {
                return res.status(404).json({ message: 'Instructor not found' });
            }
    
            res.json(instructor);
        } catch (error:any) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
)

// Delete an instructor by ID
export const deleteInstructor = CatchAsyncError(
    async (req: Request, res: Response,next: NextFunction) => {
        try {
            const { id } = req.params;
            const deletedInstructor = await instructorModel.findByIdAndDelete(id);
    
            if (!deletedInstructor) {
                return res.status(404).json({ message: 'Instructor not found' });
            }
    
            res.json({ message: 'Instructor deleted successfully' });
        } catch (error:any) {
            return next(new ErrorHandler(error.message, 500));
        }
    }
)
