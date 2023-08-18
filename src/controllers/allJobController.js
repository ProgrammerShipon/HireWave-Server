const { allJobCollection } = require('../collections/collection');

const getAllJobController = async (req, res, next) => {
   try {
      const newJobPostDetails = ({
         title: req.body.title,
         postedDate: req.body.postedDate,
         companyLogo: req.body.companyLogo,
         category: req.body.category,
         location: req.body.location,
         jobType: req.body.jobType,
         salary: req.body.salary,
         experience: req.body.experience,
         quantity: req.body.quantity,
         applied: req.body.applied,
         overview: req.body.overview,
         requirements: req.body.requirements,
         skillsExperience: req.body.skillsExperience,
         benefits: req.body.benefits,
         skills: req.body.skills,
      })
      console.log(newJobPostDetails)
      const newJobPost = await allJobCollection.insertMany(newJobPostDetails);
      res.status(200).send(newJobPost)
   }
   catch (error) {
      next(error)
   }
}

module.exports = getAllJobController 