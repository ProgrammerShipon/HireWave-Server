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
   
   try {
      const result = await jobOffer(body).save()
      res.status(200).send(result)
   } catch (err) {
      console.log(err)
      res.status(404).send({message: 'Server Error' })
   }
}

module.exports = { getAllJobOffer, postJobOffer };