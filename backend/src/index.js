import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/db_config.js";
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();

// used for cross origin where we can used this

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// allow json

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(cookieParser())
app.use(express.static('public'))




dotenv.config({ path: "./env" });

app.get("/", (req, res) => {
  res.send("<h1>Testing!</h1>");
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on Port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });
