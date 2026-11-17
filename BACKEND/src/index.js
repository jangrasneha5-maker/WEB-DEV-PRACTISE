
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({ path: "./.env" });

const startserver = async () => {
    try {
        await connectDB();

        app.on("error", (error) => {
            console.log("ERROR:", error);
        });

        app.listen(process.env.PORT || 4000, () => {
            console.log(
                `Server is running on port: ${process.env.PORT || 4000}`
            );
        });

    } catch (error) {
        console.log("Server startup failed:", error.message);
    }
};

startserver();
