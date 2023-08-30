const express = require("express");
const { postUser, getAllUser } = require("../controllers/userControllers");
const userRouter = express.Router();

// Store User data Api
userRouter.post("/", postUser);

userRouter.get("/", getAllUser);

module.exports = userRouter;
