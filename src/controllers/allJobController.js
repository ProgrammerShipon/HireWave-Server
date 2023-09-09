const { ObjectId } = require('bson');
const { allJobCollection } = require('../collections/collection');


// Post a Job (todo: only developer)
const postAllJob = async (req, res) => {
   try {
      const newJobPostData = req.body;
      console.log("new Job Data -> ", newJobPostData);

      const newJobPost = await allJobCollection.insertMany(newJobPostData);

      console.log('Inserted data -> ', newJobPost);

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
      console.log(newJobPost)
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



module.exports = { postAllJob, postOneJob, getAllJob, getAJob, deleteAJobPost };
