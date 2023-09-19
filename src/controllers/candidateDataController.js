const { allCandidatesCollection, usersCollection } = require("../collections/collection");

// Find All Candidates Data
const getAllCandidatesData = async (req, res) => {
  try {
    const allCandidates = await allCandidatesCollection.find();
    res.status(200).json(allCandidates)
  } catch (error) {
    res.status(404).json({ message: error.message }) // todos: back-end error no json front-end
  }
}

// get candidates single data
const getACandidate = async (req, res) => {
  try {
    const Result = await allCandidatesCollection.findById(req.params.id);
      res.status(200).json(Result)
  } catch (error) {
    res.status(404).json("Data Not Found or Server error");
  }
}

// find single Recruiters data 
const getCandidateByGmail = async (req, res) => {
  try {
    const query = { email: req.params.email }
    const result = await allCandidatesCollection.findOne(query)
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// One Data insert
const postCandidateData = async (req, res) => {
  try {
    const newCandidateData = req.body;
    const newUser = {
      role: "candidate",
      name: newCandidateData?.name,
      email: newCandidateData?.email,
      image: newCandidateData?.image,
      status: "pending",
    };

    const newCandidate = {
      ...newCandidateData,
      status: "pending",
      viewsCount: [],
      following: [],
    };

    const insertUser = await usersCollection(newUser).save();
    const insertCandidate = await allCandidatesCollection(newCandidate).save();
    
    const responseData = {
      user: insertUser,
      candidate: insertCandidate,
    };
    res.status(200).json(responseData);
  } catch (error) {
    res.status(404).json({ message: error.message });
    res.status(404).send({ message: error.message });
  }
};

// Delete a candidate by ID
const deleteCandidate = async (req, res) => {
  try {
    const deletedCandidate = await allCandidatesCollection.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(deletedCandidate);
  } catch (err) {
    console.error('Error deleting candidate:', err);
  }
};

// Update candidate status
const candidateStatusUpdate = async (req, res) => {
  const updateBody = req.body;

  try {
    // Only Status Update
    if (updateBody.status) {
      const emailQuery = { email: updateBody?.email };
      // only user collection status update
      const usersClnUpdate = await usersCollection.findOneAndUpdate(
        emailQuery,
        { status: updateBody?.status },
        { new: true }
      );
      // only recruiter collection status update
      const candidateClnUpdate = await allCandidatesCollection.findOneAndUpdate(
        emailQuery,
        { status: updateBody?.status },
        { new: true }
      );

      // send data client site
      res.status(200).send({ usersClnUpdate, candidateClnUpdate });
    }
  } catch (error) {
    console.log(error)
    res.status(400).send({ message: 'Server Error' });
  }
};

// Update candidate Profile
const updateCandidateProfilePhoto = async (req, res) => {
  const candidateId = req.params.id;
  const updateData = req.body;
  try {
    // Use findByIdAndUpdate to update the document
    const updatedCandidate = await allCandidatesCollection.findByIdAndUpdate(
      candidateId,
      {
        $set: {
          image: updateData.url
        },
      },
      { new: true } // To return the updated document
    );
    if (!updatedCandidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    res.status(200).json(updatedCandidate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update candidate Profile
const updateCandidateProfile = async (req, res) => {
  const candidateId = req.params.id;
  const updateData = req.body;
  try {
    // Use findByIdAndUpdate to update the document
    const updatedCandidate = await allCandidatesCollection.findByIdAndUpdate(
      candidateId,
      {
        $set: {
          title: updateData.title,
          name: updateData.name,
          visibility: updateData.visibility
        },
      },
      { new: true } // To return the updated document
    );
    if (!updatedCandidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    res.status(200).json(updatedCandidate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update candidate Availability
const updateCandidateAvailability = async (req, res) => {
  const candidateId = req.params.id;
  const { jobType, hourlyRate } = req.body;
  try {
    // Use findByIdAndUpdate to update the document
    const updatedCandidate = await allCandidatesCollection.findByIdAndUpdate(
      candidateId,
      {
        $set: {
          jobType: jobType,
          hourlyRate: hourlyRate,
        },
      },
      { new: true } // To return the updated document
    );
    if (!updatedCandidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    res.status(200).json(updatedCandidate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update candidate Description
const updateCandidateAbout = async (req, res) => {
  const candidateId = req.params.id;
  const about = req.body;
  try {
    // Use findByIdAndUpdate to update the document
    const updatedCandidate = await allCandidatesCollection.findByIdAndUpdate(
      candidateId,
      {
        $set: {
          about: about
        },
      },
      { new: true } // To return the updated document
    );
    if (!updatedCandidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    res.status(200).json(updatedCandidate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update candidate Location
const updateCandidateLocation = async (req, res) => {
  const candidateId = req.params.id;
  const { location, address } = req.body;
  try {
    // Use findByIdAndUpdate to update the document
    const updatedCandidate = await allCandidatesCollection.findByIdAndUpdate(
      candidateId,
      {
        $set: {
          location: location,
          address: address
        },
      },
      { new: true }
    );
    if (!updatedCandidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    res.status(200).json(updatedCandidate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update candidate Skills 
const updateCandidateSkills = async (req, res) => {
  const candidateId = req.params.id;
  const newSkills = req.body;
  try {
    // Use findByIdAndUpdate to update the document
    const updatedCandidate = await allCandidatesCollection.findByIdAndUpdate(
      candidateId,
      { skills: newSkills },
      { new: true }
    );
    if (!updatedCandidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    res.status(200).json(updatedCandidate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

};

// Update candidate Language Skills 
const updateCandidateLanguageSkills = async (req, res) => {
  const candidateId = req.params.id;
  const newLanguage = req.body;
  try {
    // Use findByIdAndUpdate to update the document
    const updatedCandidate = await allCandidatesCollection.findByIdAndUpdate(
      candidateId,
      { languages: newLanguage },
      { new: true }
    );
    if (!updatedCandidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    res.status(200).json(updatedCandidate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

};

// Update candidate Educational Qualification
const updateCandidateEducationalQualification = async (req, res) => {
  const candidateId = req.params.id;
  const newEducations = req.body;
  try {
    // Use findByIdAndUpdate to update the document
    const updatedCandidate = await allCandidatesCollection.findByIdAndUpdate(
      candidateId,
      { education: newEducations },
      { new: true }
    );
    if (!updatedCandidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    res.status(200).json(updatedCandidate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

};

// Update candidate Educational Qualification
const updateCandidateExperience = async (req, res) => {
  const candidateId = req.params.id;
  const newExperience = req.body;
  try {
    // Use findByIdAndUpdate to update the document
    const updatedCandidate = await allCandidatesCollection.findByIdAndUpdate(
      candidateId,
      { experience: newExperience },
      { new: true }
    );
    if (!updatedCandidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    res.status(200).json(updatedCandidate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Profile visitor Count
const candidateViewsCountUpdate = async (req, res) => {
  const bodyData = req.body;
  const id = req.params.id;
  try {
    const data = await allCandidatesCollection.findById(id);

    // already visitor or not checking
    const isExist = await data.viewsCount.filter(
      (email) => email == bodyData.recruiterEmail
    );
    
    if (!isExist) {
      const updated = await allCandidatesCollection.findByIdAndUpdate(
        id,
        { viewsCount: bodyData.recruiterEmail },
        { new: true }
      );
      // updated data send
      res.status(200).send(updated);
    }

    // Already data send
    res.status(201).send({message: 'already Counted'});
  } catch (error) {
    console.log(error)
    res.status(404).send({message: 'Server Error !'})
  }
}

// Module export
module.exports = {
  getAllCandidatesData,
  getACandidate,
  postCandidateData,
  deleteCandidate,
  updateCandidateProfile,
  updateCandidateProfilePhoto,
  updateCandidateAvailability,
  updateCandidateAbout,
  updateCandidateLocation,
  updateCandidateSkills,
  updateCandidateLanguageSkills,
  updateCandidateEducationalQualification,
  updateCandidateExperience,
  getCandidateByGmail,
  candidateStatusUpdate,
  candidateViewsCountUpdate,
};