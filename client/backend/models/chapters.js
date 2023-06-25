const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chaptersSchema = new Schema({
    chapterID: String,
    name: String,
    chapterNumber: Number,
    sponsor: String,
    memberCount: Number,
    meetingDate: String,
    meetingTime: String,
    meetingVenue: String,
    email: String,
    website: String
})

const Chapters = mongoose.model('Chapters', chaptersSchema)
module.exports = Chapters