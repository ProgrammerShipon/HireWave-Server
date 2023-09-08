require('dotenv').config()

// PORT 
const PORT = process.env.SERVER_PORT || 3031;

// mongodb uri
const mongodbURL = process.env.MONGODB_URL;

// JWT secrete token
const jwtSecret = process.env.JWT_ACCESS_TOKEN;

module.exports = { PORT, mongodbURL, jwtSecret };