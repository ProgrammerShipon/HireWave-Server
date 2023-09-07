const mongoose = require('mongoose');

const validateEmail = function (email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const candidateDataModel = new mongoose.Schema({
  role: { type: String },

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    // required: true, // todos: unComment
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  image: {
    type: String,
  },
  title: {
    type: String,
  },
  phone: {
    type: Array,
  },
  category: {
    type: String,
  },
  hourlyRate: {
    type: String,
  },
  jobType: {
    type: String,
  },
  location: {
    type: Array,
  },
  address: {
    type: String,
  },
  skills: [String],
  about: {
    type: Array,
  },
  education: {
    type: Array,
  },
  experience: {
    type: Array,
  },
  socialLink: {
    type: Array,
  },
  languages: {
    type: Array,
  },
  recommendations: {
    type: Number,
    min: 0,
  },
  openToWork: {
    type: Boolean,
  },
  visibility: {
    type: String,
  },
  status: Boolean,
  joinDate: String,
});


  // rating: {
  //   type: Number,
  //   min: 0,
  //   max: 5,
  // },
  // salaryRange: String,


module.exports = candidateDataModel;