import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectionDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

connectionDB();

app.use(express.json());
app.use("/api/auth", authRoutes);



// Make a about route that have about of a users information like name, age, and hobbies

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server in reuuning on port ${PORT}`);
    
});

