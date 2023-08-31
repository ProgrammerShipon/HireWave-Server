const express = require("express");
const { ObjectId } = require("bson");
const {
  postUser,
  getUserByEmail,
  getUserById,
  getAllUser,
} = require("../controllers/userControllers");
const userRouter = express.Router();

// Store User data Api
userRouter.post("/", postUser);

userRouter.get("/", getAllUser);
userRouter.get("/byEmail/:email", getUserByEmail);
userRouter.get("/Id/:id", getUserById);

module.exports = userRouter;
