const { tasks } = require("../collections/collection");

// task post or store database
const tasksPost = async (req, res) => {
   const body = req.body;
   try {
      const result = await tasks(body).save();
      res.status(200).send(result)
   } catch (error) {
      console.error(error)
      res.status(404).send({message: 'server error'})
   }
}

// show all task
const allTaskGet = async (req, res) => {
   try {
     const result = await tasks.find();
     res.status(200).send(result);
   } catch (error) {
     res.status(404).send({ message: "server error" });
   }
}

// Post a Job Offer
const findByCandidateEmail = async (req, res) => {
   const body = req?.body;
   const candidateEmail = req?.params.email;
   
   try {
      const jobs = await tasks.find();
      const filteredJob = await jobs.filter(job => job?.applicant?.email == candidateEmail);
      res.status(200).send(filteredJob);
   } catch (err) {
      res.status(404).send({message: 'Server Error' })
   }
}

// module or controller exports
module.exports = {
  allTaskGet,
  tasksPost,
  findByCandidateEmail,
};