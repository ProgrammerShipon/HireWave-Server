const { default: mongoose } = require("mongoose");

const appliedCandidatesDataModel = new mongoose.Schema({
  applicantEmail: {
    type: String,
    required: true,
  },
  appliedJobId: {
    type: String,
    required: true,
    unique: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  companyLogo: {
    type: String,
    required: true,
  },
  cover_letter: {
    type: String,
    required: true,
  },
  attachment: {
    type: Array,
    required: true,
  },
  expected_salary: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  appliedDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = appliedCandidatesDataModel;
