const mongoose = require('mongoose');

const candidateDataModel = new mongoose.Schema(
  {
    name: String, // Add the 'name' field
    images: String,
    category: String,
    about: String,
    status: String,
    location: String,
    skills: [String],
    socialLink: [Object],
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    languages: [Object],
    recentReview: [Object],
    hourlyRate: {
      type: Number,
      min: 0,
    },
    recommendations: {
      type: Number,
      min: 0,
    },
    salaryRange: String,
    education: [Object], 
    experience: [Object],
    joinDate: Date, 
  },
  { timestamps: true }
); 


module.exports = candidateDataModel;