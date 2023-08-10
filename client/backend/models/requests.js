const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const barSchema = new Schema({
  white: Number,
  red: Number,
  blue: Number,
  purple: Number,
  gold: Number,
});

const requestSchema = new Schema({
  userID: String,
  name: String,
  chapterID: String,

  athletics: { barSchema },
  attendance: { barSchema },
  civicService: { barSchema },
  conclave: { barSchema },
  fineArts: { barSchema },
  fundraising: { barSchema },
  installing: { barSchema },
  journalism: { barSchema },
  masonicAttendance: { barSchema },
  masonicService: { barSchema },
  merit: { barSchema },
  petitions: { barSchema },
  religion: { barSchema },
  ritual: { barSchema },
  scholastics: { barSchema },
  visitation: { barSchema },

  proof: String,

  isApproved: Boolean,
});

const meritBarRequest = mongoose.model("meritBarRequest", requestSchema);

module.exports = meritBarRequest;
