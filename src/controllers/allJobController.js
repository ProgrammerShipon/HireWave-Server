const { allJobCollection } = require('../collections/collection');

// Post a Job (todo: only developer)
const postAllJob = async (req, res) => {
   try {
      const newJobPostData = req.body;
      const newJobPost = await allJobCollection.insertMany(newJobPostData);
      res.status(200).send(newJobPost)
   } catch (error) {
      console.log('postAllJob -> ', error)
      res.status(404).send({ message: 'Server Error'})
   }
}

// Post a Job - 
const postOneJob = async (req, res) => {
   try {
      const newJobPostData = req.body;
      const newJobPost = await allJobCollection(newJobPostData).save();
      res.status(200).send(newJobPost)
   } catch (error) {
      console.log('postOneJob -> ', error)
      res.status(404).send({ message: 'Server Brocken'})
   }
}

// Get all Jobs Post
const getAllJob = async (req, res) => {
   try {
      const allJobs = await allJobCollection.find();
      res.status(200).send(allJobs);
   } catch (error) {
      console.log("getAllJob -> ", error);
      res.status(404).send({ message: 'Server Broken'});
   }
}

// Get a Jobs Post
const getAJob = async (req, res) => {
   try {
      const id = req.params.id;
      const Result = await allJobCollection.findById(id);
      res.status(200).send(Result);
   } catch (error) {
      console.log("getAJob -> ", error);
      res.status(404).send({ message: 'Server Broken'})
   }
}

// Get a Jobs Post
const getEmail = async (req, res) => {
   try {
      const email = {companyEmail: req.params.email};
      const Result = await allJobCollection.findOne(email);
      res.status(200).send(Result);
   } catch (error) {
      console.log("getEmail -> ", error);
      res.status(404).send({ message: 'Server Broken'})
   }
}

// Update A Job Data
const updateJobs = async (req, res) => {
   const updateData = req.body;
  try {
    const result = await allJobCollection.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    res.status(200).send(result);
  } catch (error) {
      console.log("updateJobs -> ", error);
      res.status(404).send({ message: 'Server Broken'});
  }
};

// Delete A Job Post
const deleteAJobPost = async (req, res) => {
   try {
      const id = req.params.id;
      const deleteJobPost = await allJobCollection.findByIdAndDelete(id);
      res.status(200).send(deleteJobPost)
   } catch (error) {
      console.log("deleteAJobPost -> ", error);
      res.status(404).send({ message: "Server Broken" });
   }
}

// job controller exports
module.exports = {
   postAllJob,
   postOneJob,
   getAllJob,
   getAJob,
   updateJobs,
   deleteAJobPost,
   getEmail
};
