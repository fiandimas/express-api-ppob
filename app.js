const express = require('express'),
      bodyParser = require('body-parser'),
      Busboy = require('busboy'),
      app = express()

const LevelController = require('./controllers/level'),
      AdminController = require('./controllers/admin'),
      CostController = require('./controllers/cost'),
      CustomerController = require('./controllers/customer'),
      UsageController = require('./controllers/usage'),
      BillController = require('./controllers/bill')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.text())

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
app.post('/admin/login', AdminController.login)
app.put('/admin/update', AdminController.update)
app.delete('/admin/delete', AdminController.delete)

app.post('/cost', CostController.show)
app.post('/cost/add', CostController.create)
app.put('/cost/update', CostController.update)
app.delete('/cost/delete', CostController.delete)

app.post('/customer', CustomerController.show)
app.post('/customer/add', CustomerController.create)
app.post('/customer/login', CustomerController.login)
app.put('/customer/update', CustomerController.update)
app.delete('/customer/delete', CustomerController.delete)

app.post('/usage', UsageController.show)
app.post('/bill', BillController.show)
app.post('/usage/detail', UsageController.detail)
app.post('/usage/add', UsageController.create)
app.delete('/usage/delete', UsageController.delete)

app.listen(3000, () => {
  console.log('Server listening on localhot:3000')
})