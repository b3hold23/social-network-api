import { ObjectId } from "mongodb";
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
// Create a new user
export const createUser = async (req, res) => {
    const user = req.body;
    try {
        const users = await User.create(user);
        res.json(users);
    }
    catch (err) {
        res.status(400).json(err);
    }
};
// Update a user by ID
export const getUserById = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findOne({ _id: new ObjectId(userId) });
        res.json(user);
    }
    catch (err) {
        res.status(400).json(err);
    }
};
