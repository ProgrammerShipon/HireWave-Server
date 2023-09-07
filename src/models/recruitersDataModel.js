const { default: mongoose } = require("mongoose");

const recruitersDataModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  email: {
    type: String,
    required: true, 
    unique: true, 
    lowercase: true,
  },
  banner: String,
  phone: [
    {
      type: String,
    },
  ],
  industry: {
    type: String,
  },
  website: String,
  category: String,
  subCategory: String,
  location: [
    {
      type: String,
    },
  ],
  address: String,
  about: [
    {
      type: String,
    },
  ],
  specialties: [String],
  status: {
    type: String,
    enum: ["approved", "pending", "rejected"], 
    default: "approved",
  },
  active: Boolean,
  followers: {
    type: Number,
    min: 0, // Followers should not be negative
  },
  joinDate: Date,
});

module.exports = recruitersDataModel