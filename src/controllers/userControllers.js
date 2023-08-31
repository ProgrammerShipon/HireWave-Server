const { ObjectId } = require("bson");
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

// Get a user by email
const getUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const query = { email: email };
    const user = await usersCollection.findOne(query);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
// Get a user by Id
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const user = await usersCollection.findOne(query);
    // console.log(user)
    res.status(200).json(user);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
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

module.exports = { postUser, getAllUser, getUserByEmail, getUserById };
