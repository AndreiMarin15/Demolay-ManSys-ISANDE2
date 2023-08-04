const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendanceAwardSchema = new Schema({
  eventID: String,
  position: String,
  performance: String,
  attendance: String,
});

const applicationSchema = new Schema({
  applicantID: String,
  attendance: [attendanceAwardSchema],
});

const awardApplication = mongoose.model("awardApplication", applicationSchema);

module.exports = awardApplication;
