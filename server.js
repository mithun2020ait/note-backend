import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectionDB from "./config/db.js";

const app = express();

connectionDB();

app.get("/", (req, res) => {
    res.send("Hello express Backend!");
});

app.get("/note", (req, res) => {
    res.send("Note Page!")
})

// Make a about route that have about of a users information like name, age, and hobbies

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server in reuuning on port ${PORT}`);
    
});

