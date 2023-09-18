const mongoose = require('mongoose');

const validateEmail = function (email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const candidateDataModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: String,
  title: String,
  phone: String,
  category: String,
  hourlyRate: String,
  jobType: String,
  location: String,
  address: String,
  skills: [String],
  about: [String],
  education: [
    {
      institute: String,
      subject: String,
      startDate: String,
      endDate: String,
    },
  ],
  experience: [
    {
      position: String,
      companyName: String,
      location: String,
      startDate: String,
      endDate: String,
    },
  ],
  socialLink: [
    {
      linkedin: String,
      github: String,
      twitter: String,
      facebook: String,
    },
  ],
  languages: [
    {
      name: String,
      level: String,
    },
  ],
  status: {
    type: String,
    enum: ["approved", "pending", "rejected"],
    default: "pending",
  },
  recommendations: Number,
  active: Boolean,
  earning: Number,
  viewsCount: [String],
  following: [String],
  visibility: String,
  joinDate: String,
});

module.exports = candidateDataModel;