const { usersCollection, recruitersCollection, allCandidatesCollection } = require("../collections/collection");

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
    const user = await usersCollection.findOne({email: req.params.email});
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

// Get a user by Id
const getUserById = async (req, res) => {
  try {
    const user = await usersCollection.findById(req.params.id);
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

  try {
    const emailQuery = { email: updateData?.email };

    // updated json success
    let sendData;

    // only user collection status update
    const usersClnUpdate = await usersCollection.findOneAndUpdate(
      emailQuery,
      { status: updateData?.status },
      { new: true }
    );
    sendData = { usersClnUpdate };
    
    // only recruiter collection status update
    let recruiterClnUpdate
    if (usersClnUpdate?.role == "recruiter") {
       recruiterClnUpdate = await recruitersCollection.findOneAndUpdate(
        emailQuery,
        { status: updateData?.status },
        { new: true }
      );
      sendData = { ...sendData, recruiterClnUpdate };
    }

    // only recruiter collection status update
    let candidateClnUpdate;
    if (usersClnUpdate?.role == "candidate") {
      candidateClnUpdate = await allCandidatesCollection.findOneAndUpdate(
        emailQuery,
        { status: updateData?.status },
        { new: true }
      );
      sendData = { ...sendData, candidateClnUpdate };
    }

    // send data client site
    res.status(200).send({ sendData });
  } catch (error) {
    res.status(400).send({ message: error.message });
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
