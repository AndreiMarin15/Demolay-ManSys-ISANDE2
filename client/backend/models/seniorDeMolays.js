const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SeniorDemolaysSchema = new Schema({
	seniorDemolayID: String,
    yearsAsAdvisor: Number
});

const SeniorDemolays = mongoose.model("SeniorDemolays", SeniorDemolaysSchema);
module.exports = SeniorDemolays;
