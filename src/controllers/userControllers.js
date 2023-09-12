const { allCandidatesCollection, usersCollection } = require("../collections/collection");

// Add A User On DataBase
const postUser = async (req, res) => {
  try {
    const newUserData = req.body;

    const query = { email: newUserData.email };
    const isExist = await usersCollection.findOne(query);
    
    if (isExist) {
      return res.status(201).send({ isExist, message: "user exist" });
    } else {
      const insert = await usersCollection(newUserData).save();
      return res.status(200).send({ insert})
    }

  } catch (error) {
    console.error(error);
    res.status(404).send({ message: "Server Problem",});
  }
};

// Get a user by email
const getUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await usersCollection.findOne({email});
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

// Get a user by Id
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await usersCollection.findById(id);
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
  console.log('update user -> ', updateData);

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
module.exports = {
  postUser,
  getUserByEmail,
  getUserById,
  getAllUser,
  deleteUser,
  updateUser,
};
