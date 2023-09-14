const { default: mongoose } = require("mongoose");

const jobOfferModel = new mongoose.Schema({
  jobId: String,
  jobType: String,
  category: String,
  title: String,
  position: String,
  salary: String,
  status: {
    type: String,
    enum: ["open", "accept", "reject", "expired"],
    default: "open",
  },
  offerDetails: Array,
  applicant: {
    name: String,
    email: String,
    image: String,
  },
  company: {
    name: String,
    email: String,
    image: String,
  },
  read: Boolean,
  sendDate: String,
});

module.exports = jobOfferModel