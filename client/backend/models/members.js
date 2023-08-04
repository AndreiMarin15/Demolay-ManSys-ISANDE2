const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const memberSchema = new Schema(
	{
		memberId: {
			type: String,
			required: true,
			
			
		},

		password: {
			type: String,
			required: true,
			
		},

		lastName: String,

		givenName: String,

		middleName: String,

		suffix: String,

		birthdate: Date,

		chapterId: String,

		dualChapterID: String,

		email: String,

		mobile: String,

		homeAddress: String,

		facebookLink: String,

		photo: String,

		demolayDegreeDate: String,

		initiatoryDegreeDate: String,

		position: String,

		inbox: [{
			circularId: String,
			subject: String,
			message: String,
			circularLink: String,
			sender: String
		}]
	},
	{
		timestamps: true,
	}
);

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
