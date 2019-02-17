const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const LevelController = require('./controllers/level')
const AdminController = require('./controllers/admin')
const CostController = require('./controllers/cost')
const CustomerController = require('./controllers/customer')
const UsageController = require('./controllers/usage')
const BillController = require('./controllers/bill')

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

app.post('/customer', CustomerController.show)
app.post('/customer/add', CustomerController.create)
app.put('/customer/update', CustomerController.update)
app.delete('/customer/delete', CustomerController.delete)

app.post('/usage', UsageController.show)
app.post('/bill', BillController.show)
app.post('/usage/detail', UsageController.detail)
app.post('/usage/add', UsageController.create)


app.listen(3000, () => {
  console.log('Server listening on localhot:3000')
})