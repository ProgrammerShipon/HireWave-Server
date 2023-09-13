const { default: mongoose } = require("mongoose");

const tasksModel = new mongoose.Schema({
  appliedId: String,
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
  companyId: String,
  tasks: [
    {
      given: String,
      startTime: String,
      submissionTime: String,
    },
  ],
});

// file or Model exports 
module.exports = tasksModel