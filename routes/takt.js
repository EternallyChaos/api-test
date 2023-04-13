const express = require("express");
const router = express.Router();

const data = require("../TaktDatabase/Destiny/destinyEN.json");

module.exports = router;

// Post
router.get("/", (req, res) => {
  res.send("takt working");
});

router.get("/characters", (req, res) => {
  const characters = ["destiny", "twinkleStars"];
  res.json({ character: characters });
});

router.get("/destiny", (req, res) => {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(data));
});
