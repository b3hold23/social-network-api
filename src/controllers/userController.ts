import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import User from "../models/User.js";

export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Create a new user
export const createUser = async (req: Request, res: Response) => {
    const user = req.body;
    try {
        const users = await User.create(user);
        res.json(users);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Get user by ID
export const getUserById = async (req: Request, res: Response) => {
    const { userId } = req.params;
    try {
        const user = await User.findOne({ _id: new ObjectId(userId) }); 
        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};