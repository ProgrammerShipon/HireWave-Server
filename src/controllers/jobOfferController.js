const { jobOffer } = require('../collections/collection');

// All Job Offer
const getAllJobOffer = async (req, res) => {
   try {
      const result = await jobOffer.find()
      res.status(200).send(result)
   } catch (err) {
      console.log(err);
      res.status(404).send({ message: "Server Error" });
   }
}

// Post a Job Offer
const postJobOffer = async (req, res) => {
   const body = req?.body;
   try {
      const result = await jobOffer(body).save()
      res.status(200).send(result)
   } catch (err) {
      console.log(err)
      res.status(404).send({message: 'Server Error' })
   }
}

// Post a Job Offer
const findByCandidateEmail = async (req, res) => {
   const body = req?.body;
   const candidateEmail = req?.params.email;
   
   try {
      const jobs = await jobOffer.find()
      const filteredJob = await jobs.filter(job => job?.applicant?.email == candidateEmail);
      res.status(200).send(filteredJob);
   } catch (err) {
      console.log(err)
      res.status(404).send({message: 'Server Error' })
   }
}

// Job Offer Candidate Seen
const updateJobOfferRead = async ( req, res ) => {
   const OfferId = req?.params.id;
   // try {
   //    const jobs = await jobOffer.find()
   //    const filteredJob = await jobs.filter(job => job?.applicant?.email == candidateEmail);
   //    res.status(200).send(filteredJob);
   // } catch (err) {
   //    console.log(err)
   //    res.status(404).send({message: 'Server Error' })
   // }
} 


// 
module.exports = {
  getAllJobOffer,
  postJobOffer,
  findByCandidateEmail,
  updateJobOfferRead,
};