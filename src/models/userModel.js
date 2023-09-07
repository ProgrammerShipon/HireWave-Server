const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  role: String,
  name: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  image: String,
  status: { type: String, required: true },
});

module.exports = userSchema;
