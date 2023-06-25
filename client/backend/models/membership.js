const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const membershipSchema = new Schema(
    {
        memberID: String,
        chapterID: String,
        firstLineSigner: String,
        paymentStatus: Boolean,
        proofOfPayment: String,
        paymentDate: Date,
        receiptNumber: Number,
        form10ID: String
    }
)

const Membership = mongoose.model("Membership", membershipSchema)
module.exports = Membership