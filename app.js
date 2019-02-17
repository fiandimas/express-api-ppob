const express = require('express')
const bodyParser = require('body-parser')
const index = require('./models/index')
const Level = require('./models/level')(index.sequelize,index.Sequelize)

const app = express()

const LevelController = require('./controllers/level')
const AdminController = require('./controllers/admin')

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

app.listen(3000, () => {
  console.log('Server listening on localhot:3000')
})