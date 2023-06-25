const mongoose = require('mongoose')
const Schema = mongoose.Schema

const staffSchema = new Schema({
   staffID: String,
   lastName: String,
   givenName: String,
   middleName: String,
   suffix: String,
   position: String
})

const Staff = mongoose.model("Staff", staffSchema)
module.exports = Staff