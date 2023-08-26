const { default: mongoose } = require("mongoose");
// const bcrypt = require("bcrypt");
// const { defaultImagePath } = require("../secret");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  joinDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = userSchema;
