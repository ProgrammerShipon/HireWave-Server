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
   const candidateEmail = req?.params.email;
   
   try {
      const jobs = await tasks.find({ applicantEmail: candidateEmail });
      res.status(200).send(jobs);
   } catch (err) {
      console.log(err)
      res.status(404).send({message: 'Server Error' })
   }
}

// Post a Job Offer
const findByRecruiterEmail = async (req, res) => {
   const recruiterEmail = req?.params.email;
   
   try {
      const jobs = await tasks.find({ companyEmail: recruiterEmail });
      res.status(200).send(jobs);
   } catch (err) {
      console.log(err)
      res.status(404).send({message: 'Server Error' })
   }
}

// module or controller exports
module.exports = {
  allTaskGet,
  tasksPost,
  findByCandidateEmail,
  findByRecruiterEmail,
};