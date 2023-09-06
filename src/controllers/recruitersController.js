const { recruitersCollection } = require("../collections/collection");

// post single data
const postNewRecruiter = async (req, res) => {
  try {
    const newRecruiterData = req.body;
    const newRecruiter = await recruitersCollection(newRecruiterData).save();
    res.status(200).send(newRecruiter);
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
const getAllRecruiters = async (req, res) => {
  try {
    const recruiters = await recruitersCollection.find();
    res.status(200).send(recruiters); 
  } catch (error) {
    res.status(404).send({ message: error.message }); // todos: no server error send
  }
};

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

// Update Recruiter
const updateData = (req, res) => {
  console.log('update Recruiter')
  const id = req.params.id;
  const body = req.body;
  console.log(id, body)
}

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
  getAllRecruiters,
  getRecruiter,
  postNewRecruiter,
  deleteRecruiter,
  postNewRecruiters,
  updateData,
};
