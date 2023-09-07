const { jwtSecret } = require("../secret");

const jwtVerify = (req, res, next) => {
     const authorization = req.headers.authorization;

     if (!authorization) {
       return res
         .status(401)
         .send({ error: true, message: "unauthorized access" });
      }
      
     // bearer token split
     const token = authorization.split(" ")[1];

     jwt.verify(token, jwtSecret, (error, decoded) => {
       if (error) {
         return res
           .status(401)
           .send({ error: true, message: "unauthorized access" });
       }

       req.decoded = decoded;
       next();
     });

}

module.exports = jwtVerify