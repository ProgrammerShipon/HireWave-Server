const { recruitersCollection, usersCollection, paymentCollection } = require("../collections/collection");

// One Data insert 
const postNewRecruiter = async (req, res) => {
  try {
    const newRecruiterData = req.body;

    const newUser = {
      role: "recruiter",
      name: newRecruiterData?.name,
      email: newRecruiterData?.email,
      image: newRecruiterData?.image,
      status: "pending",
    };

    const recruiterData = {
      ...newRecruiterData,
      viewsCount: [],
      following: [],
    };

    const insertUser = await usersCollection(newUser).save();
    const insertRecruiter = await recruitersCollection(recruiterData).save();

    const responseData = {
      user: insertUser,
      recruiter: insertRecruiter,
    };

    // send result client site
    res.status(200).send(responseData);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

// Recruiter all data insert (only developer)
const postNewRecruiters = async (req, res) => {
  try {
    const newRecruiterData = req.body;
    const newRecruiter = await recruitersCollection.insertMany(
      newRecruiterData
    );

    // send result client site
    res.status(200).send(newRecruiter);
  } catch (error) {
    res.status(404).send({ message: error.message }); // todo: no server error send
  }
};

// all recruiter data
const getAllRecruiters = async (req, res) => {
  try {
    const recruiters = await recruitersCollection.find();
    res.status(200).send(recruiters);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
}

// find single Recruiters data 
const getRecruiter = async (req, res) => {
  try {
    recruitersCollection.findById(req.params.id)
      .then(data => {
        res.status(200).send([data]);
      });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

// find single Recruiters data 
const getRecruiterByGmail = async (req, res) => {
  try {
    const query = { email: req.params.email };
    const result = await recruitersCollection.findOne(query);

    // send result client site
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

// Update Recruiter
const updateRecruiter = async (req, res) => {
  const updateData = req.body;

  try {
    const emailQuery = { email: updateData?.email };

    // only user collection status update
    const usersClnUpdate = await usersCollection.findOneAndUpdate(
      emailQuery,
      { status: updateData?.status },
      { new: true }
    );
    // only recruiter collection status update
    const recruiterClnUpdate = await recruitersCollection.findOneAndUpdate(
      emailQuery,
      { status: updateData?.status },
      { new: true }
    );

    // send data client site
    res.status(200).send({ usersClnUpdate, recruiterClnUpdate });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// Delete Recruiter data
const deleteRecruiter = async (req, res) => {
  try {
    recruitersCollection.findByIdAndDelete(req.params.id)
      .then(data => {
        res.status(200).send(data)
      })
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

// Profile visitor Count
const recruiterViewsCountUpdate = async (req, res) => {
  try {
    const UpdateRecruiterData = await recruitersCollection.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { viewsCount: req.body.email } },
      { new: true }
    );

    if (!UpdateRecruiterData) {
      return res.status(404).json({ message: 'Recruiter not found or This this user is already exist' });
    }
    return res.status(200).json(UpdateRecruiterData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
}

// Update Recruiter ProfilePhoto
const updateRecruiterProfilePhoto = async (req, res) => {
  const recruiterId = req.params.id;
  const updateData = req.body;
  console.log(updateData)
  try {
    //   // Use findByIdAndUpdate to update the document
    const updatedRecruiterProfile = await recruitersCollection.findByIdAndUpdate(
      recruiterId,
      {
        $set: {
          image: updateData.image,
        },
      },
      { new: true }
    );

    const updateUserData = await usersCollection.findOneAndUpdate(
      { email: updateData.email },
      {
        $set: {
          image: updateData.image
        },
      },
      { new: true }
    )
    console.log(updateUserData)

    if (!updatedRecruiterProfile) {
      return res.status(404).json({ message: 'Recruiter not found' });
    }

    console.log(updatedRecruiterProfile)
    res.status(200).json(updatedRecruiterProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Recruiter Company Banner
const updateRecruiterBanner = async (req, res) => {
  const recruiterId = req.params.id;
  const updateData = req.body;
  console.log(updateData)
  try {
    //   // Use findByIdAndUpdate to update the document
    const updatedRecruiterProfile = await recruitersCollection.findByIdAndUpdate(
      recruiterId,
      {
        $set: {
          banner: updateData.banner
        },
      },
      { new: true }
    );

    if (!updatedRecruiterProfile) {
      return res.status(404).json({ message: 'Recruiter not found' });
    }

    console.log(updatedRecruiterProfile)
    res.status(200).json(updatedRecruiterProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Recruiter Profile
const updateRecruiterName = async (req, res) => {
  const recruiterId = req.params.id;
  const updateData = req.body;
  console.log(updateData)
  try {
    //   // Use findByIdAndUpdate to update the document
    const updatedRecruiterProfile = await recruitersCollection.findByIdAndUpdate(
      recruiterId,
      {
        $set: {
          name: updateData.name
        },
      },
      { new: true }
    );

    const updateUserData = await usersCollection.findOneAndUpdate(
      { email: updateData.email },
      {
        $set: {
          name: updateData.name
        },
      },
      { new: true }
    )
    const updateUserDataPayment = await paymentCollection.findAndUpdate(
      { recruiterEmail: updateData.email },
      {
        $set: {
          recruiterName: updateData.name
        },
      },
      { new: true }
    )

    if (!updatedRecruiterProfile) {
      return res.status(404).json({ message: 'Recruiter not found' });
    }

    console.log(updatedRecruiterProfile)
    res.status(200).json(updatedRecruiterProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Recruiter About 
const updateRecruiterAbout = async (req, res) => {
  const recruiterId = req.params.id;
  const about = req.body;
  try {
    // Use findByIdAndUpdate to update the document
    const updatedRecruiter = await recruitersCollection.findByIdAndUpdate(
      recruiterId,
      {
        $set: {
          about: about
        },
      },
      { new: true }
    );
    // console.log(updatedRecruiter)
    if (!updatedRecruiter) {
      return res.status(404).json({ message: 'recruiter not found' });
    }

    res.status(200).json(updatedRecruiter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Update Recruiter About 
const updateRecruiterSpecialties = async (req, res) => {
  const recruiterId = req.params.id;
  const specialties = req.body;
  try {
    // Use findByIdAndUpdate to update the document
    const updatedRecruiter = await recruitersCollection.findByIdAndUpdate(
      recruiterId,
      {
        $set: {
          specialties: specialties
        },
      },
      { new: true }
    );
    // console.log(updatedRecruiter)
    if (!updatedRecruiter) {
      return res.status(404).json({ message: 'recruiter not found' });
    }

    res.status(200).json(updatedRecruiter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Recruiter Location
const updateRecruiterLocation = async (req, res) => {
  const recruiterId = req.params.id;
  const { location, address } = req.body;
  console.log(recruiterId)
  try {
    // Use findByIdAndUpdate to update the document
    const updatedRecruiter = await recruitersCollection.findByIdAndUpdate(
      recruiterId,
      {
        $set: {
          location: location,
          address: address
        },
      },
      { new: true }
    );
    // console.log(updated Recruiter)
    if (!updatedRecruiter) {
      return res.status(404).json({ message: 'Recruiter not found' });
    }

    res.status(200).json(updatedRecruiter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Update Recruiter Location
const updateRecruiterContact = async (req, res) => {
  const recruiterId = req.params.id;
  const { phone } = req.body;
  console.log(recruiterId)
  try {
    // Use findByIdAndUpdate to update the document
    const updatedRecruiter = await recruitersCollection.findByIdAndUpdate(
      recruiterId,
      {
        $set: {
          phone: phone,
        },
      },
      { new: true }
    );
    // console.log(updatedRecruiter)
    if (!updatedRecruiter) {
      return res.status(404).json({ message: 'Recruiter not found' });
    }

    res.status(200).json(updatedRecruiter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getRecruiter,
  postNewRecruiter,
  deleteRecruiter,
  postNewRecruiters,
  getRecruiterByGmail,
  updateRecruiter,
  getAllRecruiters,
  recruiterViewsCountUpdate,
  updateRecruiterProfilePhoto,
  updateRecruiterBanner,
  updateRecruiterName,
  updateRecruiterAbout,
  updateRecruiterLocation,
  updateRecruiterContact,
  updateRecruiterSpecialties
};
