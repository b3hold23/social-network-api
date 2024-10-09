import { Request, Response } from "express";
// import { ObjectId } from "mongodb";
import Thought from "../models/Thought.js";
// import { get } from "mongoose";

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
    const thought = req.body;
    try {
        const thoughts = await Thought.create(thought);
        res.json(thoughts);
    } catch (err) {
        res.status(400).json(err);
    }
};

//Get thought by ID
export const getThoughtById = async (req: Request, res: Response) => {
    const { thoughtId } = req.params;
    try {
        const thought = await Thought.findOne({ _id: thoughtId });
        res.json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
};

//Update thought by ID
export const updateThoughtById = async (req: Request, res: Response) => {
    try {
        const updatedThought = await Thought
        .findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedThought);
        console.log(`Updated thought: ${updatedThought}`);
    } catch (err) {
        console.log("I don't feel so good, Mr. Stark");
        res.status(500).json({ message: "Something went wrong!" });
    }
};

//Delete thought by ID
export const deleteThoughtById = async (req: Request, res: Response) => {
    try {
        const deletedThought = await Thought
        .findOneAndDelete(
            { _id: req.params.thoughtId },
        );
        res.status(200).json(deletedThought);
        console.log(`Deleted thought: ${deletedThought}`);
    } catch (err) {
        console.log("I don't feel so good, Mr. Stark");
        res.status(500).json({ message: "Something went wrong!" });
    }
};


//Add a reaction to a thought
export const addReaction = async (req: Request, res: Response) => {
    try {
        const updatedThought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { new: true }
        );
        res.status(200).json(updatedThought);
        console.log(`Updated thought: ${updatedThought}`);
    } catch (err) {
        console.log("I don't feel so good, Mr. Stark");
        res.status(500).json({ message: "Something went wrong!" });
    }
};

//remove a reaction from a thought
export const removeReaction = async (req: Request, res: Response) => {
    console.log("Received request to remove reaction with ID:", req.params.reactionId);
    console.log("From thought with ID:", req.params.thoughtId);
    try {
        const updatedThought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { new: true }
        );
        res.status(200).json(updatedThought);
        console.log(`Updated thought: ${updatedThought}`);
    } catch (err) {
        console.log("I don't feel so good, Mr. Stark");
        res.status(500).json({ message: "Something went wrong!" });
    }
};