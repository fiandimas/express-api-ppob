const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req,res) => {
  res.send('OK')
})

mongoose.connect('mongodb://localhost:27017/api-ppob')
mongoose.Promise = global.Promise

app.listen(3000, () => {
  console.log('Server listening on localhot:3000')
})