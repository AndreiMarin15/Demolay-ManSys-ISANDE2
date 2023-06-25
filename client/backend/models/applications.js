const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const applicationSchema = new Schema(
    {
        applicationId: String,
        memberID: String,
        
    }
)

const Application = mongoose.model("Application", applicationSchema)
module.exports = Application