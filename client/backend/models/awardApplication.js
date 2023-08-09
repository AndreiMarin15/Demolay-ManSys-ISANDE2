const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendanceAwardSchema = new Schema({
  eventID: String,
  position: String,
  performance: String,
  attendance: String,
  proof: String,
});

const applicationSchema = new Schema({
  applicantID: String,
  name: String,
  chapterID: String,
  attendance: [attendanceAwardSchema],
  isSubmitted: Boolean,
  isApproved: Boolean,
});

const awardApplication = mongoose.model("awardApplication", applicationSchema);

module.exports = awardApplication;
