const { Schema, model, default: mongoose } = require('mongoose')
const bcrypt = require('bcrypt');
const { defaultImagePath } = require('../secret');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User Name is required"],
      trim: true,
      minlength: [3, "The length of user name can be minim 3 charters"],
      maxlength: [36, "The length of user name can be minim 36 charters"],
    },
    email: {
      type: String,
      required: [true, "User Email is required"],
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          const vl = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          return vl.test(v);
        },
        message: "Please enter a valid email",
      },
    },
    password: {
      type: String,
      required: [true, "User Password is required"],
      minlength: [6, "The length of user password can be minimum 6 characters"],
      // set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
    },
    image: {
      type: String,
      default: defaultImagePath,
    },
    address: {
        type: String,
        required: [true, "User address is required"],
    },
    phone: {
        type: String,
        required: [true, "User Phone Number is required"],
    },
    roll: {
      type: String,
      default: false,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('Users', userSchema)

module.exports = User
