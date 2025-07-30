import { clerkClient } from '@clerk/express';
import { v2 as cloudinary } from 'cloudinary';
import Course from '../models/Course.js';
import Purchase from '../models/Purchase.js';
import User from '../models/User.js';

export const updateRoleToEducator = async (req, res) => {
    try {
        const userId = req.auth.userId;

        await clerkClient.users.updateUser(userId, {
            publicMetadata: {
                role: 'educator',
            }
        });

        res.json({ success: true, message: 'You can publish a course now' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

//Add are course
export const addCourse = async (req, res) => {
    try {
        const { coursedata } = req.body;
        const imageFile = req.file;
        const educatorId = req.auth.userId;

        if (!imageFile) {
            return res.json({ success: false, message: "Thumbnail not attached" });
        }

        const parsedCourseData = JSON.parse(coursedata);
        parsedCourseData.educator = educatorId;
        const newCourse = await Course.create(parsedCourseData)
        const imageUpload = await cloudinary.uploader.upload(imageFile.path);
        newCourse.courseThumbnail = imageUpload.secure_url;

        await newCourse.save();

        res.json({ success: true, message: "Course added successfully" });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

//get educator courses
export const getEducatorCourses = async (req, res) => {
    try {
        const educator = req.auth.userId;
        const courses = await Course.find({ educator });
        res.json({ success: true, courses });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

//get educator dashboard data
export const educatorDashboardData = async (req, res) => {
    try {
        const educator = req.auth.userId;
        const courses = await Course.find({ educator });
        const totalCourses = courses.length;

        const courseIds = courses.map(course => course._id);

        //calculate total earnings
        const purchases = await Purchase.find({
            course: { $in: courseIds },
            status: 'completed'
        });

        const totalEarnings = purchases.reduce((acc, purchase) => acc + purchase.amount, 0);

        //collect unique enrolled students ids with thier course titles
        const enrolledStudentData = [];
        for(const course of courses){
            const students = await User.find({
                _id: { $in: course.enrolledStudents }},'name imageUrl');
            
            students.forEach(student => {
                enrolledStudentData.push({
                    courseTitle: course.courseTitle,
                    student
                });
            });
        }

        res.json({
            success: true, dasboardData:{totalCourses,
            totalEarnings,
            enrolledStudents: enrolledStudentData}            
        });


    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

//get enrolled students data with purchase data
export const getEnrolledStudentsData = async (req, res) => {
    try {
        const educator = req.auth.userId;
        const courses = await Course.find({ educator });
        const courseId = courses.map(course => course._id);
        const purchases = await Purchase.find({ courseId: {$in : courseIds}, status: 'completed' })
            .populate('userId', 'name imageUrl');

        const enrolledStudents = purchases.map(purchase => ({
            student: purchase.userId,
            courseTitle: purchase.courseId.courseTitle,
            purchasedate: purchase.createdAt
        }));

        res.json({ success: true, purchases });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
