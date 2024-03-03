const mongoose = require("mongoose");
const War_newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  text: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  photo: { type: String, default: null },
});
const War_newsModel = mongoose.model("War-news", War_newsSchema);
module.exports = War_newsModel;
