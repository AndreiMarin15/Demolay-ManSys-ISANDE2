const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const advisoryCouncilSchema = new Schema({
	chapterID: String,
	termID: String,

	lastName: String,
	givenName: String,
	middleName: String,
	userId: String,
	password: String,
});

const AdvisoryCouncils = mongoose.model("AdvisoryCouncils", advisoryCouncilSchema);
module.exports = AdvisoryCouncils;
