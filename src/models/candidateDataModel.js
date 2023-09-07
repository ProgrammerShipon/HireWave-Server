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
  },
  image: String,
  title: String,
  phone: [String],
  category: String,
  hourlyRate: String,
  jobType: String,
  location: [String],
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
  recommendations: Number,
  active: Boolean,
  visibility: String,
  joinDate: String,
});


  // rating: {
  //   type: Number,
  //   min: 0,
  //   max: 5,
  // },
  // salaryRange: String,


module.exports = candidateDataModel;