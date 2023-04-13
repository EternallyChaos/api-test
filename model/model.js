const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  cost: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("data", dataSchema);
