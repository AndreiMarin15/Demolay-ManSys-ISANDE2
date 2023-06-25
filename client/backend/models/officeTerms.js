const mongoose = require('mongoose')
const Schema = mongoose.Schema

const officeTermSchema = new Schema({
    termID: String,
    chapterID: String,
    year: Number,
    term: String,
    electionDate: Date,
    installationDate: Date,
    endDate: Date
})

const OfficeTerms = mongoose.model("OfficeTerms", officeTermSchema)
module.exports = OfficeTerms