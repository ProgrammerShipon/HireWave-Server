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

    // send result client site
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

    // send result client site
    res.status(200).send(newRecruiter);
  } catch (error) {
    console.log('postNewRecruiters -> ', error);
    res.status(404).send({ message: error.message }); // todos: no server error send
  }
};

// all recruiter data
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
    const query = { email: req.params.email };
    const result = await recruitersCollection.findOne(query);

    // send result client site
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

// Update Recruiter
const updateRecruiter = async (req, res) => {
  const updateData = req.body;

  try {
    const emailQuery = { email: updateData?.email };

    // only user collection status update
    const usersClnUpdate = await usersCollection.findOneAndUpdate(
      emailQuery,
      { status: updateData?.status },
      { new: true }
    );
    // only recruiter collection status update
    const recruiterClnUpdate = await recruitersCollection.findOneAndUpdate(
      emailQuery,
      { status: updateData?.status },
      { new: true }
    );

    // send data client site
    res.status(200).send({ usersClnUpdate, recruiterClnUpdate });
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
  getRecruiter,
  postNewRecruiter,
  deleteRecruiter,
  postNewRecruiters,
  getRecruiterByGmail,
  updateRecruiter,
  getAllRecruiters,
};
