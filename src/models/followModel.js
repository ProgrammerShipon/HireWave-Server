const { Schema } = require("mongoose");

const followModel = new Schema({
  recruiterImage: String,
  recruiterEmail: String,
  recruiterName: String,
  candidateEmail: String,
  candidateName: String,
  candidateImage: String,
});

module.exports = followModel;
