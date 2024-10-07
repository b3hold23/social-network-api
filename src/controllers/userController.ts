import { Request, Response } from "express";
// import { ObjectId } from "mongodb";
import User from "../models/User.js";

export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(400).json(err);
    }
};

export const createUser = async (req: Request, res: Response) => {
    const user = req.body;
    try {
        const users = await User.create(user);
        res.json(users);
    } catch (err) {
        res.status(400).json(err);
    }
};