const { default: mongoose } = require("mongoose");

const appliedCandidatesDataModel = new mongoose.Schema({
  jobId: String,
  applicantId: String,
  applicantName: String,
  applicantEmail: String,
  applicantImage: String,
  location: String,
  category: String,
  companyName: String,
  companyLogo: String,
  companyEmail: String,
  title: String,
  jobType: String,
  cover_letter: [String],
  expected_salary: String,
  attachment: [String],
  appliedDate: String,
});

module.exports = appliedCandidatesDataModel;
