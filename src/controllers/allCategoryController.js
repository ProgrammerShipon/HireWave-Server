const { ObjectId } = require('bson');
const { AllCategoryCollection } = require('../collections/collection');


const postAllCategory = async (req, res) => {
    try {
        const newCategory = req.body;
        const result = await AllCategoryCollection.insertMany(newCategory);
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}
const postOneCategoryData = async (req, res) => {
    try {
        const newCategory = req.body;
        const result = await new AllCategoryCollection(newCategory).save();
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}
const getAllCategory = async (req, res) => {
    try {
        const getAllCategory = await AllCategoryCollection.find();
        res.status(200).send(getAllCategory)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}
const getACategory = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const Category = await AllCategoryCollection.find(query);
        // console.log(Category)
        res.status(200).send(Category)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}
const deleteACategoryPost = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const Category = await AllCategoryCollection.findOneAndDelete(query);
        console.log(Category)
        res.status(200).send(Category)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}
module.exports = { getAllCategory, getACategory, postAllCategory, postOneCategoryData, deleteACategoryPost }