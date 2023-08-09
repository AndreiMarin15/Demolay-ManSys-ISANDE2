const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const advisoryCouncilSchema = new Schema({
  lastName: String,
  givenName: String,
  middleName: String,
  userId: String,
  password: String,
  email: String,
  chapterAssigned: String,
});

const AdvisoryCouncils = mongoose.model(
  "AdvisoryCouncils",
  advisoryCouncilSchema
);
module.exports = AdvisoryCouncils;
