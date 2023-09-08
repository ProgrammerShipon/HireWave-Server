const { savedJobCollection } = require("../collections/collection");

// insert saveJob
const insertSaveJob = async (req, res) => {
    const jobInfo = req.body;
    const jobId = jobInfo.selectJob;
    const candidateMail = jobInfo.candidateMail;
    const query = { selectJob: jobId, candidateMail: candidateMail };
    const isExist = await savedJobCollection.findOne(query);
    try {

        if (isExist) {
            return res.status(202).send({ isExist, message: "Already  Bookmark" });
        } else {
            const result = await savedJobCollection(req.body).save();
            return await res.status(200).send(result);
        }
    } catch (error) {
        res.status(200).send({ error: error?.message });
    }
};

// get all data
const getAllSaveJob = async (req, res) => {
    try {
        const allSavedJobs = await savedJobCollection.find();
        res.status(200).send(allSavedJobs);
    } catch (error) {
        res.status(404).send({ message: error.message });
    }
};
// get savedJob by user Email data
const getSaveJobByUser = async (req, res) => {
    const email = req.params.email
    try {
        const query = { candidateMail: email }
        const savedJobs = await savedJobCollection.find(query);
        res.status(200).send(savedJobs);
    } catch (error) {
        res.status(404).send({ message: error.message });
    }
};

// saveJob Single Data
const saveJob = async (req, res, next) => {
    try {
        const id = req.params.id
        const result = await savedJobCollection.findById(id);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send({ message: "Not Found saveJob Data" });
    }
};

// Delete a saveJob by ID
const deleteSaveJob = async (req, res) => {
    const id = req.params.id;
    try {
        const removeSaveJob = await savedJobCollection.findByIdAndDelete(id);
        res.status(200).send(removeSaveJob);
    } catch (err) {
        res.status(404).send(err.message);
    }
};

// export file
module.exports = {
    insertSaveJob,
    getAllSaveJob,
    getSaveJobByUser,
    saveJob,
    deleteSaveJob,
};
