const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const grandMasterSchema = new Schema({
	accountId: String,
	password: String,
	accountType: Number,

	lastName: String,
	givenName: String,
	middleName: String,

	email: String,
});

const GrandMaster = mongoose.model("GrandMaster", grandMasterSchema);
module.exports = GrandMaster;
