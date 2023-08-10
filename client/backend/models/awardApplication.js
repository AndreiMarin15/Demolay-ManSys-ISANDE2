const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  isRequested: Boolean,
});

const awardApplication = mongoose.model("awardApplication", applicationSchema);

module.exports = awardApplication;
