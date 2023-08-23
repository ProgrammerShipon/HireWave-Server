const { ObjectId } = require('bson');
const { allJobCollection } = require('../collections/collection');


// Post a Job
const postAllJob = async (req, res) => {
   try {
      const newJobPostData = req.body;
      const newJobPost = await allJobCollection.insertMany(newJobPostData);
      res.status(200).send(newJobPost)
   } catch (error) {
      res.status(404).send({ message: error.message })
   }
}

// Get all Jobs Post
const getAllJob = async (req, res) => {
   try {
      const Result = await allJobCollection.find();
      res.status(200).send("ami baler server");
   } catch (error) {
      res.status(404).send({ message: error.message })
   }
}

// Get a Jobs Post
const getAJob = async (req, res) => {
   try {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const Result = await allJobCollection.find(query);
      res.status(200).send(Result);
   } catch (error) {
      res.status(404).send({ message: error.message })
   }
}

// Delete A Job Post
const deleteAJobPost = async (req, res) => {
   try {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const deleteJobPost = await allJobCollection.deleteOne(query)
      res.status(200).send(deleteJobPost)
   } catch (error) {
      res.status(404).send({ message: error.message })
   }
}
module.exports = { postAllJob, getAllJob, getAJob, deleteAJobPost };
