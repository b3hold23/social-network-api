// import { ObjectId } from "mongodb";
import User from "../models/User.js";
export const getAllUsers = async (_req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.status(400).json(err);
    }
};
