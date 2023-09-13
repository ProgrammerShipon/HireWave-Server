const { default: mongoose } = require("mongoose");

const appliedCandidatesDataModel = new mongoose.Schema({

  applicantEmail: {
    type: String,
    required: true,
  },
  jobId: {
    type: String,
    required: true
  },
  applicantId: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  companyLogo: {
    type: String,
    required: true
  },
  cover_letter: {
    type: Array,
    required: true
  },
  attachment: {
    type: Array,
    required: true
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
    type: String,
    required: true,
  },
});

module.exports = appliedCandidatesDataModel;
