const { default: mongoose } = require("mongoose");

const tasksModel = new mongoose.Schema({
  jobId: String,
  applicantId: String,
  applicantName: String,
  applicantEmail: String,
  applicantImage: String,
  category: String,
  companyName: String,
  companyLogo: String,
  companyEmail: String,
  title: String,
  tasks: [
    {
      given: Array,
      startTime: String,
      submissionTime: String,
    },
  ],
});

// file or Model exports 
module.exports = tasksModel