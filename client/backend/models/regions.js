const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regionSchema = new Schema({
  regionID: String,
  regionName: String,
  regionDesc: String,
});

const Regions = mongoose.model("Regions", regionSchema);
module.exports = Regions;
