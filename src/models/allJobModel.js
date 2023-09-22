const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const allJobModel = new mongoose.Schema({
  title: String,
  category: String,
  jobType: String,
  salary: String,
  experience: String,
  quantity: String,
  skills: [String],
  closingDate: String,
  description: String,
  applied: String,
  postedDate: String,
  open: Boolean,
  status: {
    type: String,
    enum: ["approved", "pending", "rejected"],
  },
  companyName: String,
  companyEmail: String,
  companyLogo: String,
  location: String,
  sub_category: String,
});

module.exports = allJobModel;
