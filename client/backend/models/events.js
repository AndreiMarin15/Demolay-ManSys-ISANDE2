const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendanceEventSchema = new Schema({
  meetingName: String,
  meetingDate: Date,
  term: String,
});

const eventSchema = new Schema({
  chapterID: String,
  attendanceEvents: [attendanceEventSchema],
});

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;
