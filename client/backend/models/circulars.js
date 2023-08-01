const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const circularsSchema = new Schema({
	circularText: String,
	subject: String,

	dateReleased: String,
	timeReleased: String,
	releasedBy: String,
	releasedById: String,
	disseminatedDate: String,

	disseminateTo: [],
	isDisseminated: Boolean,
	disseminatedBy: String,
	
	readBy: [],
});

const Circulars = mongoose.model("Circulars", circularsSchema);
module.exports = Circulars;
