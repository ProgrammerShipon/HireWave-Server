const { usersCollection } = require("../collections/collection");

// Add A User On DataBase
const postUser = async (req, res) => {
  try {
    const newUserData = req.body;
    const newUser = await usersCollection.insertMany(newUserData);
    res.status(200).send(newUser);
  } catch (error) {
    res.status(404).send({ message: "Server Problem"});
  }
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

// delete user
const deleteUser = async (req, res) => {
  console.log(req.params.id)

  try {
      const deleteUser = await usersCollection.findByIdAndDelete(req.params.id);
      res.status(202).send(deleteUser);
  } catch (error) {
    
    res.status(404).send({ message: error.message });
  }
}

// User Update by ID
const updateUser = async (req, res) => {
  const updateData = req.body;
  console.log('update user -> ', updateData)
  try {
    const updatedUser = await usersCollection.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    res.status(200).send(updatedUser);
  } catch (err) {
    res.send('Error updating candidate:', err.message);
  }
};

// export user controller
module.exports = { postUser, getAllUser, deleteUser, updateUser };
