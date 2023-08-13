const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 3030;

// middleware
app.use(morgan("dev"));
app.use(express.json())

// middleware Function
const isLogin = (req, res, next) => {
   const login = true;
   if (login) {
      next();
   } else {
      return res.status(401).send({message: 'please login'});
   }
}

// general apis
app.get('/', (req, res) => res.status(200).send('Assalamualaikum'))

// Route or apis


// Running Server
app.listen(port, () => {
   console.log(`Server Running - http://localhost:${port}`);
})