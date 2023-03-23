const mongoose = require("mongoose");

const threadSchema = new mongoose.Schema({
  title: {
    type: String,
    requred: true,
    maxlength: 20,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Thread", threadSchema);
