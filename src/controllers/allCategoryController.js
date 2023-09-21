const { AllCategoryCollection } = require('../collections/collection');

// post all category ( todo: only developer )
const postAllCategory = async (req, res) => {
    try {
        const newCategory = req.body;
        const result = await AllCategoryCollection.insertMany(newCategory);
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

// post category data
const postOneCategoryData = async (req, res) => {
    try {
        const newCategory = req.body;
        const result = await new AllCategoryCollection(newCategory).save();
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

// find all category
const getAllCategory = async (req, res) => {
    try {
        const getAllCategory = await AllCategoryCollection.find();
        res.status(200).send(getAllCategory)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}

// single category
const getACategory = async (req, res) => {
    try {
        const id = req.params.id;
        const Category = await AllCategoryCollection.findById(id);
        res.status(200).send(Category)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}

// delete a category 
const deleteACategoryPost = async (req, res) => {
    try {
        const id = req.params.id;
        const Category = await AllCategoryCollection.findByIdAndDelete(id);
        res.status(200).send(Category)
    } catch (error) {
        console.log("deleteACategoryPost -> ", deleteACategoryPost);
        res.status(404).send({ message: 'Server Error'})
    }
}

// export controller
module.exports = { getAllCategory, getACategory, postAllCategory, postOneCategoryData, deleteACategoryPost }