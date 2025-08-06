const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/explain", async (req, res) => {
  const { taskText } = req.body;
  const { systemPrompt } = req.body;

  if (!taskText || taskText.trim() === "") {
    return res.status(400).json({ error: "No task text provided" });
  }

  const MODEL_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

  try {
    const response = await fetch(MODEL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: `${systemPrompt}\n\nGoal: ${taskText}` }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 1,
          topP: 1,
          maxOutputTokens: 2048
        }
      })
    });

    const data = await response.json();
    const explanation = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
    
    if (!explanation) {
      console.warn("⚠️ No explanation found in Gemini response.");
    }
    res.json({ explanation });

  } catch (err) {
    console.error("❌ API call failed:", err);
    res.status(500).json({ error: "API call failed" });
  }
});
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
