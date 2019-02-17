const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const LevelController = require('./controllers/level')
const AdminController = require('./controllers/admin')
const CostController = require('./controllers/cost')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req,res) => {
  const data = {
    status: 'success',
    code: 200,
    data: []
  }

  res.json(data)
})

app.post('/level', LevelController.show)

app.post('/admin', AdminController.show)
app.post('/admin/add', AdminController.create)
app.put('/admin/update', AdminController.update)
app.delete('/admin/delete', AdminController.delete)

app.post('/cost', CostController.show)
app.post('/cost/add', CostController.create)
app.put('/cost/update', CostController.update)
app.delete('/cost/delete', CostController.delete)

app.listen(3000, () => {
  console.log('Server listening on localhot:3000')
})