import mongoose, { Document, Model, Schema } from "mongoose";
import { Express } from "express";
import dotenv from "dotenv";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { IUser } from "./user.model";

dotenv.config();

interface IComment extends Document {
  user: IUser;
  question: string;
  questionReplies?: IComment[];
}

interface IReview extends Document {
  user: IUser;
  rating: number;
  comment: string;
  commentReplies: IComment[];
}

interface ILink extends Document {
  title: string;
  url: string;
}

// Define interfaces for features, lessons, and curriculum
interface IFeature {
  icon: string; // Assuming the icon is a string (URL or component name)
  text: string;
}

interface ILesson {
  title: string;
  duration: string;
}

interface ICurriculumItem {
  title: string;
  lessons: ILesson[];
}
interface ICourseData extends Document {
  title: string;
  description: string;
  videoUrl: string;
  videoThumbnail: object;
  videoSection: string;
  videoLength: string;
  videoPlayer: string;
  link: ILink[];
  suggestion: string;
  questions: IComment[];
  // review: IReview[];
}

interface IInstructor {
  name: string;
  avatar: string;
  title: StaticRange;
  courses: number;
  students: number;
  rating: number;
}

// Define the schema for the course
const FeatureSchema = new Schema<IFeature>({
  icon: { type: String, required: true },
  text: { type: String, required: true },
});

const LessonSchema = new Schema<ILesson>({
  title: { type: String, required: true },
  duration: { type: String, required: true },
});

const CurriculumItemSchema = new Schema<ICurriculumItem>({
  title: { type: String, required: true },
  lessons: { type: [LessonSchema], required: true },
});

export interface ICourse extends Document {
  title: string;
  description: string;
  price: number;
  estimatedPrice?: number;
  thumbnail: {
    public_id: string;
    url: string;
  };
  tag?: string;
  level: string;
  demoUrl: string;
  category: string;
  reviews: IReview[];
  courseData: ICourseData[];
  rating?: number;
  students: number;
  lastUpdated: string;
  language: string;
  purchased?: number;
  instructor: IInstructor;
  features: IFeature[];
  curriculum: ICurriculumItem[];
}

const reviewSchema: Schema<IReview> = new Schema({
  user: Object,
  rating: {
    type: Number,
    default: 0,
  },
  comment: String,
  commentReplies: [Object],
});

const linkSchema: Schema<ILink> = new Schema({
  title: String,
  url: String,
});

const commentSchema: Schema<IComment> = new Schema({
  user: Object,
  question: String,
  questionReplies: [Object],
});

const courseDataSchema: Schema<ICourseData> = new Schema({
  title: String,
  description: String,
  videoUrl: String,
  videoSection: String,
  videoLength: String,
  videoPlayer: String,
  link: [linkSchema],
  suggestion: String,
  questions: [commentSchema],
});

const courseSchema: Schema<ICourse> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    estimatedPrice: {
      type: Number,
    },
    category: {
      type: String,
      required: true,
    },

    thumbnail: {
      public_id: {
        type: String,
        required: false,
      },
      url: {
        type: String,
        required: false,
      },
    },
    tag: {
      type: String,
    },
    level: {
      type: String,
      required: true,
    },
    demoUrl: {
      type: String,
      required: true,
    },

    reviews: [reviewSchema],
    courseData: [courseDataSchema],
    rating: {
      type: Number,
      default: 0,
    },
    purchased: {
      type: Number,
      default: 0,
    },
    language: {
      type: String,
      required: true,
    },

    features: {
      type: [FeatureSchema],
      required: true,
    },
    students: {
      type: Number,
      
    },
    lastUpdated: {
      type: String,
      
    },
    curriculum: {
      type: [CurriculumItemSchema],
      required: true,
    },
    instructor: {
      name: {
        type: String,
      },
      avatar: {
        type: String,

      },
    },
  },
  { timestamps: true }
);

const CourseModel: Model<ICourse> = mongoose.model("Course", courseSchema);
export default CourseModel;
