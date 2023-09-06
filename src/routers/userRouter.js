const express = require("express");
const {
  postUser,
  getUserByEmail,
  getUserById,
  getAllUser,
} = require("../controllers/userControllers");
const userRouter = express.Router();

// Store Many User data Api
userRouter.post("/", postUser);

// get all user
userRouter.get("/", getAllUser);
userRouter.get("/byEmail/:email", getUserByEmail);
userRouter.get("/Id/:id", getUserById);

// get delete user
userRouter.delete("/:id", deleteUser);

// get delete user
userRouter.patch("/:id", updateUser);

module.exports = userRouter;
