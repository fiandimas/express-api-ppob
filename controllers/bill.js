const db = require('../models/index')
const Bill = require('../models/bill')(db.sequelize,db.Sequelize)

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