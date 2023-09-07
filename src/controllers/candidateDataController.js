const { allCandidatesCollection, usersCollection } = require('../collections/collection');

// Find All Candidates Data
const getAllCandidatesData = async (req, res) => {
    try {
        const allCandidates = await allCandidatesCollection.find();
        res.status(200).send(allCandidates)
    } catch (error) {
        res.status(404).send({ message: error.message }) // todos: back-end error no send front-end
    }
}

// get candidates single data
const getACandidate = async (req, res) => {
    try {
        await allCandidatesCollection
        .findById(req.params.id)
        .then((candidateData) => res.status(200).send(candidateData))
        .catch(() => res.status(404).send("Data Not Found"));
    } catch (error) {
        res.status(404).send("Data Not Found or Server error");
    }
}

// One Data insert Or Many Data
const postCandidateData = async (req, res) => {
  try {
    const newCandidateData = req.body;
    const newUser = {
      role: "candidate",
      name: newCandidateData?.name,
      email: newCandidateData?.email,
      image: newCandidateData?.image,
      status: "pending",
    };

    const insertUser = await usersCollection(newUser).save();
    const insertCandidate = await allCandidatesCollection(newCandidateData).save();

      res.status(200).send([{...insertUser}, {...insertCandidate}]);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

// Delete a candidate by ID
const deleteCandidate = async (req, res) => {
  try {
    const deletedCandidate = await allCandidatesCollection.findByIdAndDelete(
      req.params.id
    );
    console.log('Deleted candidate:', deletedCandidate);
    res.status(200).send(deletedCandidate);
  } catch (err) {
    console.error('Error deleting candidate:', err);
  }
};

// Update a candidate by ID
const updateCandidate = async (req, res) => {
  const candidateId = req.params.id;
  const updateData = req.body;
  try {
    const updatedCandidate = await allCandidatesCollection.findByIdAndUpdate(
      candidateId,
      updateData,
      { new: true }
    );
    res.status(200).send(updatedCandidate);
  } catch (err) {
    res.send('Error updating candidate:', err);
  }
};

// Module export
module.exports = {
  getAllCandidatesData,
  getACandidate,
  postCandidateData,
  deleteCandidate,
  updateCandidate,
};