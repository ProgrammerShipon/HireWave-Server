const { default: mongoose } = require("mongoose");

const appliedCandidatesDataModel = new mongoose.Schema({

    applicantId: {
        type: String,
        require: true
    },
    appliedJobId: {
        type: String,
        require: true
    },
    companyName: {
        type: String,
        require: true
    },
    cover_letter: {
        type: String,
        require: true
    },
    attachment: {
        type: Array,
        require: true
    },
    expected_salary: {
        type: String,
        require: true
    },
    jobType: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    appliedDate: {
        type: Date,
        default: Date.now
    }
})
module.exports = appliedCandidatesDataModel;

