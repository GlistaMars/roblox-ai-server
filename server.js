const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", (req, res) => {
    const userMessage = req.body.message;
    const reply = "Ты сказал: " + userMessage;
    res.json({ reply });
});

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(3000, () => {
    console.log("Server started");
});
