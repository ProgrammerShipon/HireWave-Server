const express = require("express");
const {
  postUser,
  getUserByEmail,
  getUserById,
  getAllUser,
  deleteUser,
  updateUser,
} = require("../controllers/userControllers");
const verifyJWT = require("../config/verifyJWT");
const userRouter = express.Router();

// Store Many User data Api
userRouter.post("/", postUser);

// get all user
userRouter.get("/", verifyJWT, getAllUser);

// user search by email
userRouter.get("/email/:email", getUserByEmail);

// user search by Id
userRouter.get("/id/:id", getUserById);

// get delete user
userRouter.delete("/:id", deleteUser);

// get delete user
userRouter.patch("/:id", updateUser);

module.exports = userRouter;
