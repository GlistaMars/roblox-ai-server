const express = require("express");
const cors = require("cors");
import fetch from "node-fetch";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: "you NPC in roblox" },
                    { role: "user", content: userMessage }
                ]
            })
        });

        const data = await response.json();

        console.log(data); // 👈 важно для дебага

        const reply = data.choices?.[0]?.message?.content || "ERROR RESPONSE";

        res.json({ reply });

    } catch (err) {
        console.error(err);
        res.json({ reply: "ERROR AI" });
    }
});

app.get("/", (req, res) => {
    res.send("Server is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server started");
});
