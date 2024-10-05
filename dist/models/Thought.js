import { Schema, model } from 'mongoose';
import reactionsSchema from './Reaction.js';
const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (value) => value.toDateString()
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionsSchema]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
const Thought = model('Thought', ThoughtSchema);
export default Thought;
