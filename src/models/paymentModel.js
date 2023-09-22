const mongoose = require("mongoose");
const paymentDataModel = new mongoose.Schema({
    // recruiterId receiver amount paymentTimeline recruiterName companyLogo
    recruiterEmail: {
        type: String,
        require: true,
    },
    recruiterId: {
        type: String,
        require: true,
    },
    receiver: {
        type: String,
        require: true,
    },
    receiverImage: {
        type: String,
        require: true,
    },
    position: {
        type: String,
        require: true,
    },
    amount: {
        type: Number,
        require: true,
    },
    tran_id: {
        type: String,
        require: true,
    },
    applicantEmail: {
        type: String,
        require: true,
    },
    recruiterName: {
        type: String,
        require: true,
    },
    companyLogo: {
        type: String,
        require: true,
    },
    paymentDate: {
        type: Date,
        default: Date.now
    },
    isPaid: {
        type: Boolean,
        required: true
    }


});

module.exports = paymentDataModel;
