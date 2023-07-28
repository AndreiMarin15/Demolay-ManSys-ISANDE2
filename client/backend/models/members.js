const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const memberSchema = new Schema(
  {
    memberID: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      unique: false,
      trim: false,
    },

    lastName: String,
    givenName: String,
    middleName: String,
    suffix: String,

    birthdate: Date,
    age: Number,

    chapterId: String,
    dualChapterID: String,

    email: String,
    mobile: String,
    homeAddress: String,

    photo: String,

    demolayDegreeDate: String,
    initiatoryDegreeDate: String,
    position: String,
  },
  {
    timestamps: true,
  }
);

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
