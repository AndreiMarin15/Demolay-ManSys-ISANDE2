const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const applicationSchema = new Schema(
    {
        applicantId: String,
        applicantPassword: String,

        applicationId: String,
        regionId: String,
        chapterId: String,
        lastName: String,
        givenName: String,
        middleName: String,
        memberID: String,

        photo: String,

        streetAddress: String,
        apt: String,
        brgy: String,
        city: String,
        province: String,
        memberRegion: String,
        zipCode: Number,

        email: String,
        birthdate: Date,
        currentSchool: String,
        facebook: String,
        birthplace: String,
        course: String,
        mobile: String,
        religion: String,
        phone: String,

        schoolAddress: String,
        hobbies: String,
        interests: String,
        clubs: String,

        appliedInAnotherChapter: Boolean,
        chapterApplied: String,
        yearApplied: Number,
        status: String,

        relativeName: String,
        relationship: String,
        lodge: String,

        reference1Name: String,
        reference1Age: Number,
        reference1Email: String,
        reference1Mobile: String,

        reference2Name: String,
        reference2Age: Number,
        reference2Email: String,
        reference2Mobile: String,

        parentName: String,
        parentRelationship: String,
        parentEmail: String,
        parentMobile: String,
        parentApproved: Boolean
        
    }
)

const Application = mongoose.model("Application", applicationSchema)
module.exports = Application