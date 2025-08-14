import "dotenv/config";
import { OpenAI } from "openai";
import system from "../ai/hiteshData.js";

const openai = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});
export const chatWithPersona = async (req, res) => {
    try {
      const { message } = req.body;
  
      const completion = await openai.chat.completions.create({
        model: "gemini-2.0-flash",
        messages: [
          system,
          { role: "user", content: message },
        ],
      });
  
      res.json({ reply: completion.choices[0].message.content });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };