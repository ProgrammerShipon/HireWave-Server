const express = require("express");
const {
  addMessage,
  getMessages,
  getAllMessages,
} = require("../controllers/messageController");
const messageRoute = express.Router();

messageRoute.post("/", addMessage);

messageRoute.get("/", getAllMessages);

messageRoute.get("/:chatId", getMessages);

module.exports = messageRoute;
