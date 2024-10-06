import { User, Thought } from "../models";
const cleanDB = async () => {
    try {
        await User.deleteMany({});
        console.log("Database cleaned!");
        await Thought.deleteMany({});
        console.log("Database cleaned!");
    }
    catch (err) {
        console.log(err);
    }
};
export default cleanDB;
