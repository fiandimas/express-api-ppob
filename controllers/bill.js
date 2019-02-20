const db = require('../models/index'),
      Bill = require('../models/bill')(db.sequelize,db.Sequelize),
      Payment = require('../models/payment')(db.sequelize,db.Sequelize),
      multer = require('multer')
 
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

exports.show = (req,res) => {
  Bill.findAll().then((bill) => {
    const data = {
      status: 'success',
      code: 200,
      message: 'success load bill',
      data: bill
    }

    res.json(data)
  })
}

exports.detail = (req,res) =>{ 
  const id_customer = req.params.id_customer
  db.sequelize.query('SELECT bills.month,bills.year,bills.total_meter,bills.status FROM bills INNER JOIN usages ON usages.id=bills.id_usage WHERE id_customer=?',{
    replacements: [id_customer],
    type: db.sequelize.QueryTypes.SELECT
  }).then((result) => {
    res.send(result)
  })
}

exports.customer = (req,res) => {
  const id_customer = req.params.id_customer
  db.sequelize.query('SELECT bills.id, bills.month,bills.year,bills.total_meter,costs.cost,payments.admin_cost,payments.image,bills.status FROM bills INNER JOIN usages ON usages.id=bills.id_usage INNER JOIN customers ON customers.id = usages.id_customer INNER JOIN costs ON costs.id = customers.id_cost LEFT JOIN payments ON payments.id_bill=bills.id WHERE usages.id_customer = ?', {
    replacements: [id_customer],
    type : db.sequelize.QueryTypes.SELECT
  }).then((bill) => {
    const data = {
      status: 'success',
      code: 200,
      message: 'success load bill',
      bill: bill
    }
    res.send(data)
  })
}

exports.pay = (req,res) => {
  const admin_cost = 10000,
        id = req.params.id,
        date = new Date(),
        year = date.getUTCFullYear(),
        month = date.getUTCMonth() + 1,
        day = date.getDate()
        
  db.sequelize.query('SELECT COUNT(payments.id) as total,bills.id as bid,bills.month,bills.year,bills.total_meter,costs.cost FROM bills LEFT JOIN payments ON payments.id_bill=bills.id INNER JOIN usages ON usages.id=bills.id_usage INNER JOIN customers ON customers.id=usages.id_customer INNER JOIN costs ON costs.id=customers.id_cost WHERE bills.id=?', {
    type: db.sequelize.QueryTypes.SELECT,
    replacements: [id]
  }).then((result) => {
    if(result[0].total == 0){
      Payment.create({
        id_bill: id,
        date: year + month + day,
        month: result[0].month,
        year: result[0].year,
        admin_cost: admin_cost,
        total: result[0].total_meter * result[0].cost + admin_cost,
        status: 'p',
        image: req.file.filename,
        id_admin: 1
      }).then(() => {
        const data = {
          status: 'success',
          code: 200,
          message: 'success add photo'
        }

        res.json(data)
      })
    }else{
      Payment.update({
        image: req.file.filename
      }, {
        where: {
          id_bill: id
        }
      }).then(() => {
        const data = {
          status: 'success',
          code: 200,
          message: 'success update photo'
        }

        res.json(data)
      })
    }
  })
}

exports.upload = () => {
  return upload.single('image')
}