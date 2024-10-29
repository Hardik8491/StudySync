import mongoose, { Document, Schema } from "mongoose";

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

// Define the instructor interface
interface IInstructor {
  name: string;
  title: string;
  avatar: string; // URL for the instructor's avatar
  courses: number;
  students: number;
  rating: number;
}

// Extend Document interface for Mongoose
interface ICourse extends Document {
  _id: string;
  title: string;
  description: string;
  rating: number;
  students: number;
  lastUpdated: string;
  language: string;
  price: number;
  discountPrice: number;
  thumbnail: string; // URL for the course thumbnail
  instructor: IInstructor;
  features: IFeature[];
  curriculum: ICurriculumItem[];
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

const InstructorSchema = new Schema<IInstructor>({
  name: { type: String, required: true },
  title: { type: String, required: true },
  avatar: { type: String, required: true },
  courses: { type: Number, required: true },
  students: { type: Number, required: true },
  rating: { type: Number, required: true },
});

const CourseSchema = new Schema<ICourse>({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  students: { type: Number, required: true },
  lastUpdated: { type: String, required: true },
  language: { type: String, required: true },
  price: { type: Number, required: true },
  discountPrice: { type: Number, required: true },
  thumbnail: { type: String, required: true },
  instructor: { type: InstructorSchema, required: true },
  features: { type: [FeatureSchema], required: true },
  curriculum: { type: [CurriculumItemSchema], required: true },
});

// Create the Course model
const CourseModel = mongoose.model<ICourse>("Course", CourseSchema);

export default CourseModel;
