import Course from '../models/Course.js';
import User from '../models/User.js';

//get all courses
export const getAllCourse = async (req, res) => {
    try {
        const courses = await Course.find({isPublished: true}).select (['-courseContent', '-enrolledStudents']).populate({path:'educator'});

        res.json({ success: true, courses });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

// Get course by ID
export const getCourseById = async (req, res) => {
    const {id} = req.params;
    try {      
        const courseData = await Course.findById(id).populate({path: 'educator'})

        courseData.courseContent.forEach(chapter =>{
            chapter.chapterContent.forEach(lecture =>{
                if(!lecture.isPreviewFree){
                    lecture.lectureUrl = "";
                }
            })
        })
        res.json({ success: true, courseData });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

