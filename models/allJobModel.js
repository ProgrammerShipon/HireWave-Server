const { Schema } = require("mongoose");

const allJobModel = new Schema({
  title: {
    type: String,
    require: true,
  },
  postedDate: {
    type: String, // todo: new Date.now()
    require: true,
  },
  companyName: {
    type: String,
    require: true,
  },
  companyEmail: {
    type: String,
    require: true,
  },
  companyLogo: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  jobType: {
    type: String,
    require: true,
  },
  salary: {
    type: String,
    require: true,
  },
  closingDate: {
    type: String,
    require: true,
  },
  experience: {
    type: Array,
    require: true,
  },
  quantity: {
    type: String,
    require: true,
  },
  applied: {
    type: String,
    require: true,
  },
  overview: {
    type: String,
    require: true,
  },
  requirements: {
    type: Array,
    require: true,
  },
  skillsExperience: {
    type: Array,
    require: true,
  },
  benefits: {
    type: Array,
    require: true,
  },
  skills: {
    type: Array,
    require: true,
  },
},{ timestamps: true });

module.exports = allJobModel