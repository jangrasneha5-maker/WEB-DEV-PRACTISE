
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB...");

        console.log(
            "MongoDB URI exists:",
            !!process.env.MONGODB_URI
        );

        const connectionInstance = await mongoose.connect(
            process.env.MONGODB_URI,
            {
                serverSelectionTimeoutMS: 15000
            }
        );

        console.log("MongoDB connected successfully!");
        console.log("Host:", connectionInstance.connection.host);

    } catch (error) {
        console.log("ERROR NAME:", error.name);
        console.log("ERROR MESSAGE:", error.message);

        console.log("DETAILED SERVER ERRORS:");

        if (error.reason?.servers) {
            for (const [address, server] of error.reason.servers) {
                console.log("Server:", address);
                console.log("Error:", server.error?.message);
            }
        }

        process.exit(1);
    }
};

export default connectDB;
