const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

body: JSON.stringify({
    model: "gpt-4o-mini",  
    messages: [
        { role: "system", content: "Ты NPC в игре Roblox, отвечай коротко и дружелюбно." },
        { role: "user", content: userMessage }
    ]
})

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(3000, () => {
    console.log("Server started");
});
