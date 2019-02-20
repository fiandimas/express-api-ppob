const express = require('express'),
      bodyParser = require('body-parser'),
      multer = require('multer'),
      app = express()

const LevelController = require('./controllers/level'),
      AdminController = require('./controllers/admin'),
      CostController = require('./controllers/cost'),
      CustomerController = require('./controllers/customer'),
      UsageController = require('./controllers/usage'),
      BillController = require('./controllers/bill'),
      HistoryController = require('./controllers/history')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const storage = multer.diskStorage({
  destination: (req,file,cb) => {
    cb(null, 'public/images/payments')
  },
  filename: (req,file,cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
const upload = multer({
  storage: storage
})

app.post('/', upload.single('cek'),(req,res) => {
  res.send(req.file.filename)
})

app.get('/level', LevelController.show)

app.get('/admin', AdminController.show)
app.post('/admin/add', AdminController.create)
app.post('/admin/login', AdminController.login)
app.put('/admin/update/:id', AdminController.update)
app.delete('/admin/delete/:id', AdminController.delete)

app.get('/cost', CostController.show)
app.post('/cost/add', CostController.create)
app.put('/cost/update/:id', CostController.update)
app.delete('/cost/delete/:id', CostController.delete)

app.get('/customer', CustomerController.show)
app.get('/customer/bill/:id_customer', BillController.customer)
app.post('/customer/add', CustomerController.create)
app.post('/customer/login', CustomerController.login)
app.put('/customer/update/:id', CustomerController.update)
app.delete('/customer/delete/:id', CustomerController.delete)

app.get('/usage', UsageController.show)
app.get('/usage/detail/:id_customer', UsageController.detail)
app.get('/bill', BillController.show)
app.get('/bill/detail/:id_customer', BillController.detail)
app.post('/bill/pay/:id',BillController.upload(),BillController.pay)
app.post('/usage/add', UsageController.create)
app.delete('/usage/delete', UsageController.delete)

app.get('/history', HistoryController.show);

app.listen(3000, () => {
  console.log('Server listening on localhot:3000')
})