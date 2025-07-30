import User from "../models/User.js";
import Purchase from '../models/Purchase.js';
import Stripe from 'stripe';
import Course from '../models/Course.js'


export const getUserData = async(req, res)=>{
    try{

        const userId = req.auth.userId;
        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({ success: false, message: "User not found" });
        }

        req.json({ success: true, user });

    }catch(error){
        res.json({ success: false, message: error.message });
    }
}

//User Enrolled Courses With Lecture Links
export const userEnrolledCourses = async(req,res)=>{
    try{

        const userId = req.auth.userId;
        const userData = await User.findById(userId).populate('enrolledCourses');

    }catch(error){
        res.json({ success: false, message: error.message });
    }
}

//purchase course
export const purchaseCourse = async (req, res) => {
  try {
    const { courseId } = req.body;
    const { origin } = req.headers;
    const userId = req.auth.userId;

    const userData = await User.findById(userId);
    const courseData = await Course.findById(courseId);

    if (!userData || !courseData) {
      return res.status(404).json({ success: false, message: "User or Course not found" });
    }

    const discountedPrice = courseData.coursePrice * (1 - courseData.discount / 100);
    const amount = discountedPrice.toFixed(2);

    const purchasedata = {
      courseId: courseData._id,
      userId,
      amount
    };

    const newPurchase = await Purchase.create(purchasedata);

    const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);
    const currency = process.env.CURRENCY.toLowerCase();

    const line_items = [{
      price_data: {
        currency,
        product_data: {
          name: courseData.courseTitle
        },
        unit_amount: Math.floor(discountedPrice * 100)
      },
      quantity: 1
    }];

    const session = await stripeInstance.checkout.sessions.create({
      success_url: `${origin}/loading/my-enrollments`,
      cancel_url: `${origin}`,
      line_items,
      mode: 'payment',
      metadata: {
        purchaseId: newPurchase._id.toString()
      }
    });

   
    await User.findByIdAndUpdate(userId, {
      $addToSet: { enrolledCourses: courseData._id }
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
