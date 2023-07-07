const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const provinceSchema = new Schema({
  provinceID: String,
  name: String,
});

const Provinces = mongoose.model("Provinces", provinceSchema);
module.exports = Provinces;
