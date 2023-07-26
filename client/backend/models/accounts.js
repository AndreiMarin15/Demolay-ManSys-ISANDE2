const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountsSchema = new Schema({
	accountId: String,
	password: String,
	accountType: Number,

	lastName: String,
	givenName: String,
	middleName: String,

	email: String,
});

const Accounts = mongoose.model("Accounts", accountsSchema);
module.exports = Accounts;
