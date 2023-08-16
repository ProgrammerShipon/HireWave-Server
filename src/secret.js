require('dotenv').config()

const PORT = process.env.SERVER_PORT || 3031;

const mongodbURL = process.env.MONGODB_URL;

const defaultImagePath = process.env.DEFAULT_USER_IMAGE_PATH || '../public/images/users/default-image.png'

module.exports = { PORT, mongodbURL, defaultImagePath };