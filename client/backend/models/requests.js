const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const barSchema = new Schema({
  white: Number,
  red: Number,
  blue: Number,
  purple: Number,
  gold: Number,
});

const requestSchema = new Schema({
  userID: String,
  name: String,
  chapterID: String,

  meritBars: {},

  total: Number,
  proof: String,

  isApproved: Boolean,
});

const requests = mongoose.model("requests", requestSchema);

module.exports = requests;
