const { tasks } = require("../collections/collection");


// task post or store database
const tasksPost = async (req, res) => {
   const body = req.body;
   try {
      const result = await tasks(body).save();
      res.status(200).send(result)
   } catch (error) {
      console.error(error)
      res.status(404).send({message: 'server error'})
   }
}

const allTaskGet = async (req, res) => {
   try {
     const result = await tasks.find();
     res.status(200).send(result);
   } catch (error) {
     res.status(404).send({ message: "server error" });
   }
}


// module or controller exports
module.exports = {
   allTaskGet,
  tasksPost,
};