const express = require("express");
const {
  postUser,
  getUserByEmail,
  getUserById,
  getAllUser,
  deleteUser,
  updateUser,
} = require("../controllers/userControllers");
const userRouter = express.Router();

// Store Many User data Api
userRouter.post("/", postUser);

// get all user
userRouter.get("/", getAllUser);

// user search by email
userRouter.get("/email/:email", getUserByEmail);

// user search by Id
userRouter.get("/id/:id", getUserById);

// get delete user
userRouter.delete("/:id", deleteUser);

// get delete user
userRouter.patch("/", updateUser);

module.exports = userRouter;
