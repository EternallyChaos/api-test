const Data = require("../model/model");

const express = require("express");
const router = express.Router();

module.exports = router;

// Post
router.get("/", (req, res) => {
  res.send("API routes working");
});

router.post("/post", async (req, res) => {
  const data = new Data({
    name: req.body.name,
    cost: req.body.cost,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all
router.get("/getAll", async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.send("get all");
});

// get by id
router.get("/getOne/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Data.findById(id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update nby id
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Data.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// delete by id
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Data.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
