const mongoose = require('mongoose')
const Schema = mongoose.Schema

const circularsSchema = new Schema({
    circularID: String,
    circularNo: String,
    subject: String,
    grandMaster: String,
    dateReleased: Date,
    releasedBy: String
})

const Circulars = mongoose.model("Circulars", circularsSchema)
module.exports = Circulars