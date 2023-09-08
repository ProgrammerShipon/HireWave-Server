const mongoose = require("mongoose");
const savedJobDataModel = new mongoose.Schema({
    selectJob: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    companyName: {
        type: String,
        require: true,
    },
    companyLogo: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
    jobType: {
        type: String,
        require: true,
    },
    salary: {
        type: String,
        require: true,
    },
    candidateMail: {
        type: Array,
        require: true,
    },
    skills: {
        type: Array,
        require: true,
    },
    postedDate: {
        type: String,
        require: true,
    },
});

module.exports = savedJobDataModel;
