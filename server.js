import express from "express";
import dotenv from "dotenv";
import animeRoutes from "./Routers/animeRoutes.js";
import colors from "colors";
import { connectDB } from "./Config/db.js";
import { getAllAnime } from "./Controllers/animeControllers.js";

dotenv.config();

const app = express();

connectDB();

const PORT = process.env.PORT;

app.use("/api/v1/", animeRoutes);

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`.green.bold);
});
