import express from "express";
import { connection } from "../Config/db.js";
import asyncHandler from "express-async-handler";

const getAllAnime = asyncHandler(async (req, res) => {
  const query = "SELECT * FROM bpgqpdlrk5h7aq3xgc4f.anime_list";
  await connection.query(query, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    res.json({
      data: result,
    });
  });
});

const getAnimeById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const query = "SELECT * FROM bpgqpdlrk5h7aq3xgc4f.anime_list WHERE Id =?";

  await connection.query(query, [id], (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    res.json({
      data: result,
    });
  });
});

export { getAllAnime, getAnimeById };
