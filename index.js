require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const routes = require("./routes/routes");
const takt = require("./routes/takt");

async function run() {
  try {
    await mongoose.connect(mongoString);
  } catch (error) {
    handleError(error);
  }
}
run();

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
app.use("/takt", takt);

app.listen(3000, () => console.log("Server Started at Port: 3000..."));

app.get("/", (req, res) => {
  res.send("You are at Home");
});
