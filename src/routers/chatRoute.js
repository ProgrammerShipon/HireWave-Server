const express = require('express');
const { createChat, findUsersChats, findChat, findAllUsersChats, deleteChat } = require('../controllers/chatController');
const chatRoute = express.Router()


// create Chat 
chatRoute.post('/', createChat)

//  get chat info by user id
chatRoute.get('/:userId', findUsersChats)

//  get chat info by user id
chatRoute.get('/', findAllUsersChats)

//  get all chat 
chatRoute.get('/find/:firstId/:secondId', findChat)

//  get all chat 
chatRoute.delete('/delete/:chatId', deleteChat)

module.exports = chatRoute;