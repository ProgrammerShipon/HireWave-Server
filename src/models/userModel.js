const { default: mongoose } = require("mongoose");
// const bcrypt = require("bcrypt");
// const { defaultImagePath } = require("../secret");

const userSchema = new mongoose.Schema({
  role: String,
  profileView: Number,
  userInfo: {
    name: String,
    title: String,
    email: String,
    phone: [String],
    image: String,
    banner: String,
    category: String,
    industry: String,
    website: String,
  },
  about: [String],
  specialties: [String],
  location: String,
  address: String,
  status: Boolean,
  recentReview: [
    {
      name: String,
      image: String,
      location: String,
      rating: Number,
      review: String,
      date: String,
    },
  ],
  socialLink: mongoose.Schema.Types.Mixed,
  followers: Number,
  jobType: String,
  openToWork: mongoose.Schema.Types.Mixed,
  skills: [String],
  languages: mongoose.Schema.Types.Mixed,
  hourlyRate: mongoose.Schema.Types.Mixed,
  recommendations: mongoose.Schema.Types.Mixed,
  education: mongoose.Schema.Types.Mixed,
  experience: mongoose.Schema.Types.Mixed,
  joinDate: String,
});

module.exports = userSchema;
