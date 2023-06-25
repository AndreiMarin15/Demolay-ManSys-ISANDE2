const mongoose = require('mongoose')
const Schema = mongoose.Schema

const turnoverStatusSchema = new Schema({
    termID: String,
    form1Approved: Boolean,
    form10Approved: Boolean,
    form15Approved: Boolean,
    form16Approved: Boolean,
    assetsApproved: Boolean,
    advisoryApproved: Boolean,
    advisorApproval: Boolean,
    executiveOfficerCertification: String,
    isComplete: Boolean
})

const TurnoverStatus = mongoose.model("TurnoverStatus", turnoverStatusSchema)
module.exports = TurnoverStatus