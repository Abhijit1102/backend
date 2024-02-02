const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/tweet', (req, res) => {
    res.send('Abhijit!')
  })  

  app.get('/login', (req, res) => {
    res.send('<h1>This login</h1>')
  })  

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})