const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const form15Schema = new Schema({
  chapterID: String,
  term: String,
  year: String,
  electDate: Date,
  installDate: Date,
  officers: [
    {
      position: String,
      memberId: String,
    },
  ],
  advisoryCouncilChairman: String,
  statusAdvisoryCouncilChairman: String,
  dateSignedAdvisoryCouncilChairman: Date,

  chapterAdvisor: String,
  statusChapterAdvisor: String,
  dateSignedChapterAdvisor: Date,
});

const Form15 = mongoose.model("Form15", form15Schema);
module.exports = Form15;
