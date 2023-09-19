const { ObjectId } = require('bson');
const { partnersCollection } = require('../collections/collection');

const getAllPartnersData = async (req, res) => {
    try {
        const getAllPartners = await partnersCollection.find();
        res.status(200).send(getAllPartners)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}
const getPartner = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const partners = await partnersCollection.find(query);
        res.status(200).send(partners)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}
const postPartnersData = async (req, res) => {
    try {
        const newPartners = req.body;
        const result = await partnersCollection.insertMany(newPartners);
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}
const postOnePartnersData = async (req, res) => {
    try {
        const newPartners = req.body;
        const result = await new partnersCollection(newPartners).save();
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}
const deletePartners = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const partners = await partnersCollection.findOneAndDelete(query);
        res.status(200).send(partners)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}
module.exports = { getAllPartnersData, getPartner, postPartnersData, postOnePartnersData, deletePartners }