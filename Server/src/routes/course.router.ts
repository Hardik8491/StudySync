import express, { Router } from "express";
import {
  addAnswer,
  addQuestionInCourse,
  addReplayToReview,
  addReview,
  deleteCourse,
  editCourse,
  generateVideoUrl,
  getAllCourses,
  getCourseByUser,
  getSingleCourse,
  uploadCourse,
} from "../controllers/course.controller";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
const courseRouter = express.Router();
courseRouter.post(
  "/create-course",
  isAuthenticated,
  authorizeRole("admin"),
  uploadCourse
);
courseRouter.put(
  "/edit-course/:id",
  isAuthenticated,
  authorizeRole("admin"),
  editCourse
);
courseRouter.get("/get-courses/:id", getSingleCourse);
courseRouter.get("/get-courses", getAllCourses);
courseRouter.get("/get-course-content/:id  ", isAuthenticated, getCourseByUser);
courseRouter.put("/add-question", isAuthenticated, addQuestionInCourse);
courseRouter.put("/add-ans", isAuthenticated, addAnswer);
courseRouter.put("/add-review/:id", isAuthenticated, addReview);
courseRouter.put(
  "/add-replay/:id",
  isAuthenticated,
  authorizeRole("admin"),
  addReplayToReview
);

courseRouter.get(
  "/get-courses", isAuthenticated,
  authorizeRole("admin"),
  getAllCourses
);

courseRouter.post("/getVdoCiperOTP", generateVideoUrl);

courseRouter.delete("/course-delete/:id", isAuthenticated, deleteCourse);

export default courseRouter;
