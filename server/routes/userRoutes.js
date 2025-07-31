import express from 'express';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import {getUserData, purchaseCourse, userEnrolledCourses, getUserCourseProgress, updateUserCourseProgress, addUserRating} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.use(clerkMiddleware());

userRouter.get('/data',requireAuth() , getUserData);
userRouter.get('/enrolled-courses', userEnrolledCourses);
userRouter.post('/purchase', purchaseCourse);

userRouter.post('/update-course-progress', updateUserCourseProgress);
userRouter.post('/get-course-progress', getUserCourseProgress);
userRouter.post('/add-rating', addUserRating);

export default userRouter;