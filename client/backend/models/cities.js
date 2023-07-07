const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
  cityID: String,
  provinceID: String,
  name: String,
});

const Cities = mongoose.model("Cities", citySchema);
module.exports = Cities;
