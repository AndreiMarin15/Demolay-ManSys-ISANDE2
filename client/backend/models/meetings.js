const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const meetingSchema = new Schema({
	title: String,
	date: String,
	time: String,
	dateSet: String,
	meetingVenue: String,
	senderName: String,
	senderId: String,
});

const Meetings = mongoose.model("Meetings", meetingSchema);
module.exports = Meetings;
