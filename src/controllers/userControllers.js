const createError = require("http-errors");
const { usersCollection } = require("../collections/collection");

// Add A User On DataBase
const postUser = async (req, res) => {
  const users = req.body;
  const query = { email: users.email };
  const existingUser = await usersCollection.findOne(query);
  console.log(existingUser, "This User Is Already In Database");

  if (existingUser) {
    return;
  }
  const result = await usersCollection(users).save();
  res.send(result);
};

// Get All User
const getAllUser = async (req, res) => {
  try {
    const allUsers = await usersCollection.find();
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports = { postUser, getAllUser };
