import mongoose from "mongoose";

const connectionDB =  async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGO_URI", process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
        
    } catch (error) {
        console.error(error);
        throw error;
        process.exit(1);
    }
}

export default connectionDB;