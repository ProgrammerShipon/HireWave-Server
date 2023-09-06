const { default: mongoose } = require("mongoose");
// const userinfo = { name: user.displayName, email: user.email, userProfile: user.photoURL, role: "user" };
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userProfile: {
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
},
  {
    timestamps: true
  }
);

module.exports = userSchema;
