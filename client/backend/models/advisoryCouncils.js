const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const advisoryCouncilSchema = new Schema({
  councilID: String,
  chapterID: String,
  position: String,
  termID: String,
});

const AdvisoryCouncils = mongoose.model(
  "AdvisoryCouncils",
  advisoryCouncilSchema
);
module.exports = AdvisoryCouncils;
