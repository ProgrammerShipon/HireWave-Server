const { default: mongoose } = require("mongoose");

const appliedCandidatesDataModel = new mongoose.Schema({

    applicantId: {
        type: String,
        require: true
    },
    companyName: {
        type: String,
        require: true
    },
    companyMail: {
        type: String,
        require: true
    },
    appliedJobId: {
        type: String,
        require: true
    },
    appliedDate: {
        type: Date,
        default: Date.now
    }
})
module.exports = appliedCandidatesDataModel;