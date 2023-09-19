const { Schema } = require("mongoose");

const favoriteModel = new Schema({
  candidateId: String,
  candidateImage: String,
  candidateHourlyRate: String,
  candidateName: String,
  candidateEmail: String,
  recruiterName: String,
  recruiterImage: String,
  recruiterEmail: String,
});

module.exports = favoriteModel