require('dotenv').config()

const PORT = process.env.SERVER_PORT || 3030;

const mongodbURL = process.env.MONGODB_URL;

const jwtSecret = process.env.JWT_SECRET_TOKEN;

module.exports = { PORT, mongodbURL, jwtSecret };