import { Schema, Types } from "mongoose";
const reactionsSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => createdAtVal.toDateString()
    }
}, {
    toJSON: {
        getters: true
    },
    id: false
});
export default reactionsSchema;
