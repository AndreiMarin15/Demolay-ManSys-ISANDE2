const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const form10Schema = new Schema({
	form10Id: String,
	idDate: String,
	ddDate: String,
	initiatedMembers: [],
});

const Form10 = mongoose.model("Form10", form10Schema);
module.exports = Form10;
