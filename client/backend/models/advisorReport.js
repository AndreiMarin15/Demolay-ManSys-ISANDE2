const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const advisorReportSchema = new Schema({
  chapterID: String,
  term: String,
  year: String,

  chairID: String,
  chairAddress: String,
  chairEmail: String,
  chairPhone: String,
  chairIsReAppt: Boolean,
  chairYears: Number,

  caID: String,
  caAddress: String,
  caEmail: String,
  caPhone: String,
  caIsReAppt: Boolean,
  caYears: Number,
});

const advisorReport = mongoose.model("advisorReport", advisorReportSchema);

module.exports = advisorReport;
