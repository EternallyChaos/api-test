require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const routes = require("./routes/routes");

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(3000, () => console.log("Server Started at Port: 3000..."));

const data = require("./TaktDatabase/Destiny/destinyEN.json");

app.get("/", (req, res) => {
  res.send("You are at home a");
  console.log("Home");
});

app.get("/characters", (req, res) => {
  const characters = ["destiny", "twinkleStars"];
  res.json({ character: characters });
});

app.get("/destiny", (req, res) => {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(data));
});

app.post("/comments", (req, res) => {});
