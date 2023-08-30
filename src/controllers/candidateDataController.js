const { ObjectId } = require('bson');
const { allCandidatesCollection } = require('../collections/collection');

const getAllCandidatesData = async (req, res) => {
    try {
        const allCandidates = await allCandidatesCollection.find();
        res.status(200).send(allCandidates)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}
const getACandidate = async (req, res) => {
    try {
        await allCandidatesCollection
        .findById(req.params.id)
        .then((candidateData) => res.status(200).send(candidateData))
        .catch(() => res.status(404).send("Data Not Found"));
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}

// One Data insert Or Many Data
const postCandidateData = async (req, res) => {
    console.log('insert route hit');
  try {
    //   const result = await allCandidatesCollection.insertMany(req.body);
      const candidateData = req.body;
      candidateData.forEach(async (data) => {
        const candidate = new allCandidatesCollection(data);
        try {
          await candidate.save();
          console.log("Candidate data saved successfully.");
        } catch (error) {
          console.error("Error saving candidate data:", error);
        }
      });
  
    // res.status(200).send(result);
  } catch (err) {
      console.log(err);
    res.status(500).send({
      error: "Insert Data Somethings Wrong!",
    });
  }
};

// const postCandidateData = async (req, res) => {
//     try {
//         const allCandidates = req.body;
//         console.log('allCandidates', allCandidates)
//         const result = await new allCandidatesCollection(allCandidates).save();
//         res.status(200).send(result)
//     } catch (error) {
//         res.status(500).send({ message: error.message })
//     }
// }

const deleteCandidate = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const jobCandidate = await allCandidatesCollection.DeleteOne(query);
        console.log(jobCandidate)
        res.status(200).send(jobCandidate)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}
module.exports = { getAllCandidatesData, getACandidate, postCandidateData, deleteCandidate }