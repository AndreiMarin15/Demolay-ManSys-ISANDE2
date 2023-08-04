const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const turnoverStatusSchema = new Schema({
  chapterID: String,
  termID: String,
  form1ID: String,
  form1Approved: Boolean,
  form15ID: String,
  form15Approved: Boolean,
  assetsID: String,
  assetsApproved: Boolean,
  advisoryID: String,
  advisoryApproved: Boolean,
  eoCertification: Boolean,
});

const TurnoverStatus = mongoose.model("TurnoverStatus", turnoverStatusSchema);
module.exports = TurnoverStatus;
