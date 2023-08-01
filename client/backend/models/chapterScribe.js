const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chapterScribeSchema = new Schema({
	accountId: String,
	password: String,
	accountType: Number,

	lastName: String,
	givenName: String,
	middleName: String,
    chapterId: String,

	email: String,
});

const ChapterScribe = mongoose.model("ChapterScribe", chapterScribeSchema);
module.exports = ChapterScribe;
