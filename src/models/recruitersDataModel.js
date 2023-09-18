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
  phone: String,
  industry: {
    type: String,
  },
  website: String,
  category: String,
  subCategory: String,
  location: String,
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
    default: "pending",
  },
  active: Boolean,
  viewsCount: [String],
  following: [String],
  joinDate: Date,
});

module.exports = recruitersDataModel;