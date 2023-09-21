const express = require('express')
const {
  getAllRecruiters,
  postNewRecruiter,
  getRecruiter,
  deleteRecruiter,
  postNewRecruiters,
  // updateData,
  getRecruiterByGmail,
  updateRecruiter,
  recruiterViewsCountUpdate,
  updateRecruiterProfile,
  updateRecruiterAbout,
  updateRecruiterLocation,
  updateRecruiterContact,
  updateRecruiterSpecialties,
} = require("../controllers/recruitersController");

const recruiterRoute = express.Router()

// Post Many Recruiters Details
recruiterRoute.post('/many', postNewRecruiters)

// Post One Recruiters Data
recruiterRoute.post('/', postNewRecruiter)

// Get All Recruiters Data
recruiterRoute.get('/', getAllRecruiters)

// Single Recruiters Details
recruiterRoute.get('/:id', getRecruiter)

// Single Recruiters Details
recruiterRoute.get('/email/:email', getRecruiterByGmail)

// Update Recruiters Details
recruiterRoute.patch('/', updateRecruiter)

// Update Recruiters Details
recruiterRoute.patch("/viewsCount/:id", recruiterViewsCountUpdate);

// Update Recruiters profile
recruiterRoute.patch("/profile/:id", updateRecruiterProfile);

// Update Recruiters Data
recruiterRoute.patch("/about/:id", updateRecruiterAbout);

// Update Recruiters Data
recruiterRoute.patch("/specialties/:id", updateRecruiterSpecialties);

// Update Recruiter Location
recruiterRoute.patch("/location/:id", updateRecruiterLocation);

// Update Recruiter Location
recruiterRoute.patch("/contact/:id", updateRecruiterContact);


// Delete One Recruiters Details
recruiterRoute.delete('/:id', deleteRecruiter)


module.exports = recruiterRoute;