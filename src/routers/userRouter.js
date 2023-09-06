const express = require("express");
const {
  postUser,
  getAllUser,
  deleteUser,
  updateUser,
} = require("../controllers/userControllers");

const userRouter = express.Router();

// Store Many User data Api
userRouter.post("/", postUser);

// get all user
userRouter.get("/", getAllUser);

// get delete user
userRouter.delete("/:id", deleteUser);

// get delete user
userRouter.patch("/:id", updateUser);

module.exports = userRouter;
