const mongoose = require('mongoose')
const Schema = mongoose.Schema

const circularsSchema = new Schema({
    circularText: String,
    subject: String,
    grandMaster: String,
    dateReleased: String,
    timeReleased: String,
    releasedBy: String
})

const Circulars = mongoose.model("Circulars", circularsSchema)
module.exports = Circulars