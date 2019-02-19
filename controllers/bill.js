const db = require('../models/index'),
      Bill = require('../models/bill')(db.sequelize,db.Sequelize)

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

exports.customer = (req,res) => {
  const id_customer = req.body.id_customer
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
    res.send(bill)
  })
}