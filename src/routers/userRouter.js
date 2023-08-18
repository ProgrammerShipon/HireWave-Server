const express = require('express')
const { getUsers } = require('../controllers/userControllers')
const userRouter = express.Router()

userRouter.get('/', getUsers)

module.exports = userRouter