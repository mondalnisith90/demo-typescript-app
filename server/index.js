const express = require('express');
const PORT = 8000;

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello this is Home Page.");
});

app.get("/user/profile/:uid", (req, res) => {
    try {
        const userId = req.params.uid;
        console.log(userId);
        if(userId==100) {
            const userData = {
                name: "Niisith Mondal",
                age: 24,
                gender: "male",
                state: "WB",
                country: "India"
            }
             res.status(200).json(userData);
        } else {
            throw new Error();
        }
    } catch (error) {
        res.status(400).json("Invalid user id.");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
    console.log("I make this changes for testing purpose...");
    console.log("This is demo changes two...");
});
