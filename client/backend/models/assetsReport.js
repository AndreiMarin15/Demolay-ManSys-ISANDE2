const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assetReportSchema = new Schema({
  chapterID: String,
  term: String,
  year: String,
  senBook: Number,
  crown: Number,
  blackRobes: Number,
  whiteRobes: Number,
  altarCloth: Number,
  bible: Number,
  candleStands: Number,
  candleLights: Number,
  banner: Number,
  charterLT: Number,
  ballotBox: Number,
  scribeNotebook: Number,
  treasNotebook: Number,

  advisoryCouncilChairman: String,
  statusAdvisoryCouncilChairman: String,
  dateSignedAdvisoryCouncilChairman: Date,

  chapterAdvisor: String,
  statusChapterAdvisor: String,
  dateSignedChapterAdvisor: Date,
});

const assetReport = mongoose.model("assetReport", assetReportSchema);

module.exports = assetReport;
