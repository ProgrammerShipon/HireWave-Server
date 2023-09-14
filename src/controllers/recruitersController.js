const { recruitersCollection, usersCollection } = require("../collections/collection");


// One Data insert 
const postNewRecruiter = async (req, res) => {
  try {
    const newRecruiterData = req.body;
    const newUser = {
      role: "recruiter",
      name: newRecruiterData?.name,
      email: newRecruiterData?.email,
      image: newRecruiterData?.image,
      status: "pending",
    };

    const insertUser = await usersCollection(newUser).save();
    const insertRecruiter = await recruitersCollection(newRecruiterData).save();

    const responseData = {
      user: insertUser,
      recruiter: insertRecruiter,
    };

    res.status(200).send(responseData);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

// Recruiter all data insert (only developer)
const postNewRecruiters = async (req, res) => {
  try {
    const newRecruiterData = req.body;
    const newRecruiter = await recruitersCollection.insertMany(
      newRecruiterData
    );
    res.status(200).send(newRecruiter);
  } catch (error) {
    console.log('postNewRecruiters -> ', error);
    res.status(404).send({ message: error.message }); // todos: no server error send
  }
};

// get all recruiter data
const getRecruiters = async (req, res) => {
  try {
    const recruiters = await recruitersCollection.find();
    res.status(200).send(recruiters);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const getAllRecruiters = async (req, res) => {
  try {
    const recruiters = await recruitersCollection.find();
    res.status(200).send(recruiters);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
}

// find single Recruiters data 
const getRecruiter = async (req, res) => {
  try {
    recruitersCollection.findById(req.params.id)
      .then(data => {
        console.log(data);
        res.status(200).send([data]);
      });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
// find single Recruiters data 
const getRecruiterByGmail = async (req, res) => {
  try {
    const query = { email: req.params.email }
    const result = await recruitersCollection.findOne(query)
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

// Update Recruiter
const updateRecruiter = async (req, res) => {
  const recruiterId = req.params.id;
  console.log(recruiterId)
  const updateData = req.body;
  try {
    const updateRecruiter = await recruitersCollection.findByIdAndUpdate(
      recruiterId,
      updateData,
      { new: true }
    );
    res.status(200).send(updateRecruiter);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// Delete Recruiter data
const deleteRecruiter = async (req, res) => {
  try {
    recruitersCollection.findByIdAndDelete(req.params.id)
      .then(data => {
        res.status(200).send(data)
      })
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports = {
  getRecruiters,
  getRecruiter,
  postNewRecruiter,
  deleteRecruiter,
  postNewRecruiters,
  getRecruiterByGmail,
  updateRecruiter,
  getAllRecruiters,
};
