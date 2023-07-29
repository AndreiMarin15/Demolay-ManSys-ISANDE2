const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendanceAwardSchema = new Schema({
  term: String,
  meetingDate: Date,
  position: String,
  performance: String,
  attendance: String,
});

const attendanceEntrySchema = new Schema({
  attendanceData: [attendanceAwardSchema],
  isApproved: Boolean,
});

const athleticAwardSchema = new Schema({});

const civicServiceAwardSchema = new Schema({});

const conclaveAwardSchema = new Schema({});

const fineArtsAwardSchema = new Schema({});

const fundRaisingAwardSchema = new Schema({});

const installingAwardSchema = new Schema({});

const journalismAwardSchema = new Schema({});

const masonicAttendanceAwardSchema = new Schema({});

const masonicServiceAwardSchema = new Schema({});

const meritAwardSchema = new Schema({});

const petitionsAwardSchema = new Schema({});

const religionAwardSchema = new Schema({});

const ritualAwardSchema = new Schema({});

const scholasticsAwardSchema = new Schema({});

const visitationAwardSchema = new Schema({});

const applicationSchema = new Schema({
  applicantID: String,
  attendance: [attendanceEntrySchema],
  athletic: [[athleticAwardSchema]],
  civicService: [[civicServiceAwardSchema]],
  conclave: [[conclaveAwardSchema]],
  fineArts: [[fineArtsAwardSchema]],
  fundRaising: [[fundRaisingAwardSchema]],
  installing: [[installingAwardSchema]],
  journalism: [[journalismAwardSchema]],
  masonicAttendance: [[masonicAttendanceAwardSchema]],
  masonicService: [[masonicServiceAwardSchema]],
  merit: [[meritAwardSchema]],
  petitions: [[petitionsAwardSchema]],
  religion: [[religionAwardSchema]],
  ritual: [[ritualAwardSchema]],
  scholastics: [[scholasticsAwardSchema]],
  visitation: [[visitationAwardSchema]],
});

const awardApplication = mongoose.model("awardApplication", applicationSchema);

module.exports = awardApplication;
