const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const LevelController = require('./controllers/level')
const AdminController = require('./controllers/admin')
const CostController = require('./controllers/cost')
const CustomerController = require('./controllers/customer')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req,res) => {
  const data = {
    status: 'success',
    code: 200,
    data: [

    ]
  }

  res.json(data)
})

app.post('/level', LevelController.show)
app.post('/admin/login', AdminController.login)

app.post('/cost', CostController.show)
app.post('/cost/add', CostController.create)

app.post('/customer/add', CustomerController.create)

mongoose.connect('mongodb://localhost:27017/api-ppob',{ useNewUrlParser: true })
mongoose.Promise = global.Promise

app.listen(3000, () => {
  console.log('Server listening on localhot:3000')
})