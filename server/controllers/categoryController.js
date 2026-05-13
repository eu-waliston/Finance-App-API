import Category from "../models/Category.js";

export const createCategory = async (req, res) => {
    try {
        
        const category = await Category.create({
            ...req.body,
            userId: req.userId
        });

        
    } catch (error) {
        
    }
};