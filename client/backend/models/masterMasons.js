const mongoose = require('mongoose')
const Schema = mongoose.Schema

const masterMasonsSchema = new Schema({
    masterMasonID: String,
    lastName: String,
    givenName: String,
    middleName: String,
    suffix: String,
    masonicLodge: String,
    yearsAsAdvisor: Number
})

const MasterMasons = mongoose.model("MasterMasons", masterMasonsSchema)
module.exports = MasterMasons