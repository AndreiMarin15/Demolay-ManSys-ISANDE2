const mongoose = require("mongoose");
const Schema = mongoose.Schema;

<<<<<<< Updated upstream
const attendanceAwardSchema = new Schema({
  eventID: String,
  position: String,
  performance: String,
  attendance: String,
});

const applicationSchema = new Schema({
  applicantID: String,
  attendance: [attendanceAwardSchema],
=======
const applicationSchema = new Schema({
  applicantID: String,
  name: String,
  chapterID: String,

  type: String,
  color: String,

  attendance: {
    eventID: String,
    position: String,
    performance: String,
    attendance: String,
    proof: String,
  },

  isSubmitted: Boolean,
  isApproved: Boolean,
>>>>>>> Stashed changes
});

const awardApplication = mongoose.model("awardApplication", applicationSchema);

module.exports = awardApplication;
