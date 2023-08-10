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

  athletics: {
    eventID: String,
    proof: String,
  },

  civicService: {
    eventID: String,
    hours: Number,
    proof: String,
  },

  conclave: {
    eventID: String,
    proof: String,
  },

  fineArts: {
    eventID: String,
    performances: Number,
    proof: String,
  },

  fundraising: {
    eventID: String,
    hours: Number,
    proof: String,
  },

  installing: {
    activityDate: Date,
    chapter: String,
    position: String,
    performance: String,
    proof: String,
  },

  isSubmitted: Boolean,
  isApproved: Boolean,
  isRequested: Boolean,
});

const awardApplication = mongoose.model("awardApplication", applicationSchema);

module.exports = awardApplication;
