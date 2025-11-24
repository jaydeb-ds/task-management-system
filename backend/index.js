import express from "express";
import cors from "cors";
import dotenv, { config } from "dotenv"
import connectDB from "./config/db.js";

const app = express();

// configure dotenv 
dotenv.config()

// Middleware to handle CORS
app.use(
  cors({
    origin: process.env.FRONT_END_URL || "http://localhost:5174",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware to handle JSON onject in req body
app.use(express.json())

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hellow");
});

app.listen(PORT,() => {
  console.log(`http://localhost:${PORT}`);
  connectDB()
});
