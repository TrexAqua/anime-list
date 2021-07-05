import express from "express";
import { getAllAnime, getAnimeById } from "../Controllers/animeControllers.js";

const router = express.Router();

router.route("/anime").get(getAllAnime);
router.route("/anime/:id").get(getAnimeById);

export default router;
