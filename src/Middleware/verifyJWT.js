const verifyJWT = (req, res, next) => {
    const authorization = req.headers.authorization;
    console.log('authorization', authorization)
    if (!authorization) {
        return res.status(401).send({ error: true, message: 'unauthorized access 1' });
    }
    
    // bearer token
    const token = authorization.split(' ')[1];
    console.log('token', token)
    jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .send({ error: true, message: "unauthorized access 2" });
      }
      req.decoded = decoded;
      next();
    });
}
module.exports = verifyJWT;