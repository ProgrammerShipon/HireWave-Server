const express = require('express')
const app = express()
const port = process.env.PORT || 3030;

// middleware

// general apis
app.get('/', (req, res) => res.status(200).send('Assalamualaikum'))


// Running Server
app.listen(port, () => {
   console.log(`Server Running - http://localhost:${port}`);
})