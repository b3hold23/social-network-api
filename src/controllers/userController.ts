import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import User from "../models/User.js";
import Thought from "../models/Thought.js";
// import mongoose from "mongoose";

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

// Update user by ID
export const updateUserById = async (req: Request, res: Response) => {
    try {
        const updatedUser = await User
        .findOneAndUpdate(
            { _id: new ObjectId(req.params.userId) },
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedUser);
        console.log(`Updated user: ${updatedUser}`);
    } catch (err) {
        console.log("I don't feel so good, Mr. Stark");
        res.status(500).json({ message: "Something went wrong!" });
}
};

// Delete user by ID

export const deleteUserById = async (req: Request, res: Response) => {
    try {
        const updatedUser = await User
        .findOneAndDelete(
            { _id: new ObjectId(req.params.userId) },
        );
        await Thought.deleteMany({_id: req.params.userId});
        res.status(200).json(updatedUser);
        console.log(`Updated user: ${updatedUser}`);
    } catch (err) {
        console.log("I don't feel so good, Mr. Stark");
        res.status(500).json({ message: "Something went wrong!" });
}
};

//get all friends of a user
export const getAllFriends = async (req: Request, res: Response) => {
    try {
        const friends = await User.findOne({ _id: new ObjectId(req.params.userId) }).populate('friends');
        res.json(friends);
    } catch (err) {
        console.log("I don't feel so good, Mr. Stark");
        res.status(500).json({ message: "Something went wrong!" });
    }
};

// Add a friend to a user's friend list
export const addAFriend = async (req: Request, res: Response) => {
    try {
        console.log("Request body:", req.body);
        const updatedUser = await User.findOneAndUpdate(
            { _id: new ObjectId(req.params.userId) },
            { $addToSet: { friends:  new ObjectId(req.body.friendId) } },
            { new: true }
        );
        if (!updatedUser) {
            res.status(200).json(updatedUser);
            console.log(`Updated user: ${updatedUser}`);
        }
    } catch (err) {
        console.log("I don't feel so good, Mr. Stark");
        res.status(500).json({ message: "Something went wrong!" });
    }
};

// Remove a friend from a user's friend list
export const removeAFriend = async (req: Request, res: Response) => {
    console.log("Received request to update user with ID:", req.params.userId);
    console.log("Friend to remove:", req.body.friendId);
   try {
    const updatedUser = await User
    .findOneAndUpdate(
        { _id: new ObjectId(req.params.userId) },
        { $pull: { friends: new ObjectId(req.body.friendId) } },
        { new: true }
    );
    res.status(200).json(updatedUser);
    console.log(`Updated user: ${updatedUser}`);
   } catch (err) {
    console.log("I don't feel so good, Mr. Stark");
    res.status(500).json({ message: "Something went wrong!" });
   }
};

