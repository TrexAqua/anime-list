import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./Config/db.js";

dotenv.config();

const app = express();
connectDB();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`.green.bold);
});
