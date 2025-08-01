import mongoose from "mongoose";
import Course from "./Course.js";
import User from "./User.js";

const PurchaseSchema = new mongoose.Schema({
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    userId: { type: String, ref:'User', required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
},{timestamps: true});

const Purchase = mongoose.model('Purchase', PurchaseSchema);

export default Purchase;