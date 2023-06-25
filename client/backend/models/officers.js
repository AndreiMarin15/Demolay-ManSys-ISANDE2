const mongoose = require('mongoose')
const Schema = mongoose.Schema

const officerSchema = new Schema({
    officerID: String,
    chapterID: String,
    position: String,
    termID: String
})

const Officer = mongoose.model("Officers", officerSchema)
module.exports = Officer