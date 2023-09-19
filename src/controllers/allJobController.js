const { ObjectId } = require('bson');
const { allJobCollection } = require('../collections/collection');


// Post a Job (todo: only developer)
const postAllJob = async (req, res) => {
   try {
      const newJobPostData = req.body;
      const newJobPost = await allJobCollection.insertMany(newJobPostData);
      res.status(200).send(newJobPost)
   } catch (error) {
      res.status(404).send({ message: error.message })
   }
}

// Post a Job - 
const postOneJob = async (req, res) => {
   try {
      const newJobPostData = req.body;
      const newJobPost = await allJobCollection(newJobPostData).save();
      res.status(200).send(newJobPost)
   } catch (error) {
      res.status(404).send({ message: error.message })
   }
}

// Get all Jobs Post
const getAllJob = async (req, res) => {
   try {
      const allJobs = await allJobCollection.find();
      res.status(200).send(allJobs);
   } catch (error) {
      res.status(404).send({ message: error.message })
   }
}

// Get a Jobs Post
const getAJob = async (req, res) => {
   try {
      const id = req.params.id;
      const Result = await allJobCollection.findById(id);
      res.status(200).send(Result);
   } catch (error) {
      res.status(404).send({ message: error.message })
   }
}

// Get a Jobs Post
const getEmail = async (req, res) => {
   try {
      const email = {companyEmail: req.params.email};
      const Result = await allJobCollection.find(email);
      res.status(200).send(Result);
   } catch (error) {
      res.status(404).send({ message: error.message })
   }
}

// Update A Job Data
const updateJobs = async (req, res) => {
   const updateData = req.body;

  try {
    const result = await allJobCollection.findByIdAndUpdate(
       req.params.id, 
       req.body,
       { new: true }
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

// Delete A Job Post
const deleteAJobPost = async (req, res) => {
   try {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const deleteJobPost = await allJobCollection.findOneAndDelete(query)
      res.status(200).send(deleteJobPost)
   } catch (error) {
      res.status(404).send({ message: error.message })
   }
}



module.exports = {
  postAllJob,
  postOneJob,
  getAllJob,
  getAJob,
  updateJobs,
   deleteAJobPost,
  getEmail
};
