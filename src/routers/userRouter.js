const express = require("express");
const {
  postUser,
  getAllUser,
  deleteUser,
  updateUser,
  getUserByEmail,
  getUserById,
} = require("../controllers/userControllers");

const userRouter = express.Router();

// Store Many User data Api
userRouter.post("/", postUser);

// get all user
userRouter.get("/", getAllUser);

// get user by their Email 
userRouter.get("/byEmail/:email", getUserByEmail);

// get user by their ID 
userRouter.get("/Id/:id", getUserById);

// get delete user
userRouter.delete("/:id", deleteUser);

// get delete user
userRouter.patch("/:id", updateUser);

module.exports = userRouter;
