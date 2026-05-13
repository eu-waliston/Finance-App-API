import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    name: {
        type: String,
        required: true
    },

    color: {
        type: String,
        default: "#ffffff"
    },

    icon: {
        type: String,
        default: "circle"
    }
}, {
    timestamps: true
})

export default mongoose.model("Category", categorySchema);