const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const executiveOfficer = new Schema({
	accountId: String,
	password: String,
	accountType: Number,

	lastName: String,
	givenName: String,
	middleName: String,

	email: String,
});

const ExecutiveOfficer = mongoose.model("ExecutiveOfficer", executiveOfficer);
module.exports = ExecutiveOfficer;
