const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dmlyRegionSchema = new Schema({
  regionID: String,
  regionName: String,
  phIslandGrp: String,
  phRegion: String,
});

const Regions = mongoose.model("Regions", dmlyRegionSchema);
module.exports = Regions;
