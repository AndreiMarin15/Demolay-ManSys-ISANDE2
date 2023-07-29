const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const turnoverStatusSchema = new Schema({
  chapterID: String,
  termID: String,
  form1ID: String,
  form1Approved: Boolean,
  form15ID: String,
  form15Approved: Boolean,
  form16ID: String,
  form16Approved: Boolean,
  assetsID: String,
  assetsApproved: Boolean,
  advisoryID: String,
  advisoryApproved: Boolean,
  advisorApproval: Boolean,
  executiveOfficerCertification: String,
  isComplete: Boolean,
});

const TurnoverStatus = mongoose.model("TurnoverStatus", turnoverStatusSchema);
module.exports = TurnoverStatus;
