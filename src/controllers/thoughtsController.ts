import { Request, Response } from "express";
// import { ObjectId } from "mongodb";
import Thought from "../models/Thought.js";

//Get all thoughts
export const getAllThoughts = async (_req: Request, res: Response) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        res.status(400).json(err);
    }
};

//Create a new thought
export const createThought = async (req: Request, res: Response) => {
    console.log("Received request to update user with ID:", req.params.userId);
    console.log("Request body:", req.body);
    console.log("User ID:", req.params.userId);
    console.log("Request body:", req.body);

    const thought = req.body;
    try {
        const thoughts = await Thought.create(thought);
        res.json(thoughts);
    } catch (err) {
        res.status(400).json(err);
    }
};
