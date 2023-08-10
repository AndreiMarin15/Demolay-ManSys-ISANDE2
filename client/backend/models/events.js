const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendanceEventSchema = new Schema({
  meetingName: String,
  meetingDate: Date,
  term: String,
});

const athleticsEventSchema = new Schema({
  activityName: String,
  activityDate: Date,
  host: String,
  location: String,
});

const csEventSchema = new Schema({
  activityName: String,
  activityDate: Date,
  location: String,
});

const conclaveEventSchema = new Schema({
  activityName: String,
  type: String,
  startDate: Date,
  endDate: Date,
});

const faEventSchema = new Schema({
  activityName: String,
  activityDate: Date,
  type: String,
});

const frEventSchema = new Schema({
  activityName: String,
  activityDate: Date,
  location: String,
});

const eventSchema = new Schema({
  chapterID: String,
  attendanceEvents: [attendanceEventSchema],
  athleticEvents: [athleticsEventSchema],
  csEvents: [csEventSchema],
  conclaves: [conclaveEventSchema],
  faEvents: [faEventSchema],
  frEvents: [frEventSchema],
});

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;
