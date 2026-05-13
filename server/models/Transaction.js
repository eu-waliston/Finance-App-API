import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    type: { type: String, enum: ["income", "exprense"], required: true },
    category: String,
    description: String,
    amoutn: Number,
    date: { type: Date, default: Date.now }
})

export default mongoose.model("Transaction", transactionSchema)