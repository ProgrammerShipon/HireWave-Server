const createError = require('http-errors')

const getUsers = (req, res, next) => {
   try {
      res.status(200).send({
         message: "user profile",
      });
   } catch (error) {
      next(error);
   }
}

const postData = async (req, res, next) => {
   try {
      const data = req.body;
      // const result = await user 
   } catch (error) {
      next(error.message)
   }
}

module.exports = { getUsers };
