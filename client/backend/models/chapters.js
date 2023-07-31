const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chaptersSchema = new Schema({
  chapterID: String, // Chapter Number
  name: String,
  sponsoringBodies: String,

  institutionDate: Date,

  dmlyRegion: String,
  phIsland: String,
  phRegion: String,
  phProvince: String,
  phCity: String,

  meetingDate: String,
  meetingVenue: String, // Google Map link?
});

const Chapters = mongoose.model("Chapters", chaptersSchema);
module.exports = Chapters;
