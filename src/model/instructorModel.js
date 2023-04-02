const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  // will recieve image in bash64 format
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Instructor", instructorSchema);
