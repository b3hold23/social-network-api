import { Schema, model, Document } from 'mongoose';
import reactionsSchema from './Reaction.js';

export interface IThought extends Document {
    thoughtText: string;
    createdAt: Date;
    username: string;
    reactions: typeof reactionsSchema[];
    reactionCount: number;
}

const ThoughtSchema = new Schema<IThought>(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (value: any) => value.toDateString()
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionsSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function(this: IThought) {
    return this.reactions.length;
});

const Thought = model<IThought>('Thought', ThoughtSchema);

export default Thought;

