import db from '../config/connections.js';
import Thought from '../models/Thought.js';
import User from '../models/User.js';
import cleanDB from './cleanDB.js';
export { default as User } from '../models/User.js';
export { default as Thought } from '../models/Thought.js';



try {
    await db();
    await cleanDB();

    await User.create([
        {
            username: 'john_doe',
            email: 'john@example.com',
            thoughts: [],
            friends: []
        },
        {
            username: 'jane_doe',
            email: 'jane@example.com',
            thoughts: [],
            friends: []   
        },
    ]);
} catch (error) {
    console.error(error);
};

const thoughts = await Thought.create([
    {
        thoughtText: 'This is my first thought!',
        username: (await User.findOne())?.username,
        reactions: [
            {
                reactionBody: '😄',
                username: (await User.findOne().skip(1))?.username
            },
        ],
    },
    {
        thoughtText: 'This is another thought!',
        username: (await User.findOne())?.username,
        reactions: [
            {
                reactionBody: 'I love this thought!',
                username: (await User.findOne().skip(1))?.username
            },
        ],
    },
    {
        thoughtText: 'This is a thought from Jane!',
        username: (await User.findOne())?.username,
        reactions: [
            {
                reactionBody: '😆',
                username: (await User.findOne().skip(1))?.username
            },
        ]
    }
]);

const users = await User.find();
await User.findOneAndUpdate(
    { _id: users[0]._id },
    { $push: { thoughts: thoughts[0]._id } }
);
await User.findOneAndUpdate(
    { _id: users[1]._id },
    { $push: { thoughts: thoughts[1]._id } }
);

console.log('Seeding complete!');
process.exit(0);