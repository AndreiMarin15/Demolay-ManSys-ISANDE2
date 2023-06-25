const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const memberSchema = new Schema(
	{
		memberId: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minlength: 3,
		},

		password: {
			type: String,
			required: true,
			unique: false,
			trim: false,
			minlength: 6,
		},

		lastName: String,

		firstName: String,

		middleName: String,

		suffix: String,

		birthdate: Date,

		age: Number,

		chapterId: String,

		dualChapterID: String,

		email: String,

		mobile: String,

		homeAddress: String,

		facebookLink: String,

		photo: String,
	},
	{
		timestamps: true,
	}
);

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
