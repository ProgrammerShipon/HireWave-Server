const express = require("express");
const { createChat, findChat, usersChat } = require("../controllers/chatController");
const chatRoute = express.Router();

chatRoute.post("/", createChat);


chatRoute.get("/:userId", usersChat);
chatRoute.get("/find/:firstId/:secondId", findChat);
module.exports = chatRoute;
