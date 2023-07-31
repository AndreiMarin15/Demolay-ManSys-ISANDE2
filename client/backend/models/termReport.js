const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const termReportSchema = new Schema({
  chapterID: String,
  year: String,
  term: String,
  startTerm: Date,
  endTerm: Date,

  totalMembers: Number,
  initiated: Number,
  affiliated: Number,
  totalGains: Number,
  majority: Number,
  transferred: Number,
  deaths: Number,
  resigned: Number,
  expelled: Number,
  totalLoss: Number,
  totalNetMembers: Number,

  bankID: String,
  cashInBank: Number,
  accountsReceivable: Number,
  accountsPayable: Number,

  masterCouncilor: String,
  statusMasterCouncilor: String,
  dateSignedMasterCouncilor: Date,

  chapterScribe: String,
  statusChapterScribe: String,
  dateSignedChapterScribe: Date,

  advisoryCouncilChairman: String,
  statusAdvisoryCouncilChairman: String,
  dateSignedAdvisoryCouncilChairman: Date,

  chapterAdvisor: String,
  statusChapterAdvisor: String,
  dateSignedChapterAdvisor: Date,
});

const termReport = mongoose.model("termReport", termReportSchema);
module.exports = termReport;
