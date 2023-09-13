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

// const allJobModel = new mongoose.Schema({
//   title: {
//     type: String,
//   },
//   sub_category: {
//     type: String,
//   },
//   companyName: {
//     type: String,
//   },
//   companyEmail: {
//     type: String,
//   },
//   companyLogo: {
//     type: String,
//   },
//   category: {
//     type: String,
//   },
//   location: {
//     type: String,
//   },
//   jobType: {
//     type: String,
//   },
//   salary: {
//     type: String,
//   },
//   closingDate: {
//     type: String,
//   },
//   experience: {
//     type: Array,
//   },
//   quantity: {
//     type: String,
//   },
//   applied: {
//     type: String,
//   },
//   overview: {
//     type: String,
//   },
//   requirements: {
//     type: Array,
//   },
//   skillsExperience: {
//     type: Array,
//   },
//   benefits: {
//     type: Array,
//   },
//   skills: {
//     type: Array,
//   },
//   postedDate: {
//     type: Date,
//     default: Date.now,
//   },
//   status: {
//     type: String,
//     enum: ["approved", "pending", "rejected"],
//   },
//   open: Boolean,
// });

module.exports = allJobModel;
