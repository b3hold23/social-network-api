import { Request, Response } from "express";
// import { ObjectId } from "mongodb";
import Thought from "../models/Thought.js";

//Get all thoughts
export const getAllThoughts = async (_req: Request, res: Response) => {
    console.log("Received request to update user with ID:", _req.params.userId);
    console.log("Request body:", _req.body);
    console.log("User ID:", _req.params.userId);
    console.log("Request body:", _req.body);

    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        res.status(400).json(err);
    }
};
