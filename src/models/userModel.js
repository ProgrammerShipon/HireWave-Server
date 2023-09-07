const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  role: { type: String, enum: ["admin", "candidate", "recruiter"] },
  name: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  image: String,
  status: {
    type: String,
    required: true,
    enum: ["approved", "pending", "rejected"],
  },
});

module.exports = userSchema;
