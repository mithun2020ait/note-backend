const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello express Backend!");
});

app.get("/note", (req, res) => {
    res.send("Note Page!")
})

// Make a about route that have about of a users information like name, age, and hobbies

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server in reuuning on port ${PORT}`);
    
});

