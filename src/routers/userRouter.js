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
userRouter.get("/byEmail/:email", getUserByEmail);

// user search by Id
userRouter.get("/byId/:id", getUserById);

// get delete user
userRouter.delete("/:id", deleteUser);

// get delete user
userRouter.patch("/:id", updateUser);

module.exports = userRouter;
