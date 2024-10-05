import mongoose from 'mongoose';
const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/socialMediaDB');
        console.log('Connected to the database');
        return mongoose.connection;
    }
    catch (error) {
        console.log('Error connecting to the database', error);
        throw new Error('Error connecting to the database');
    }
};
export default db;
