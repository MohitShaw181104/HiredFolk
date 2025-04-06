import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
            console.log ("MongoDb connected successfully");
        } catch (error) {
            console.error("MongoDB connection failed"); // Exit the process with failure
        }
    }
export default connectDB;