const express = require("express");
const {getMessages,getAllMessages, createMessage,} = require("../controllers/messageController");
const messageRoute = express.Router();

messageRoute.post("/", createMessage);

messageRoute.get("/", getAllMessages);

messageRoute.get("/:chatId", getMessages);

module.exports = messageRoute;
