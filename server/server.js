import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { chatWithPersona } from "./routes/ai.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["https://persona-ai-sigma.vercel.app"],
    methods: ["POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.use("/api/chat", chatWithPersona);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
