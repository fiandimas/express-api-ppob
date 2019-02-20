const db = require('../models/index'),
      Usage = require('../models/usage')(db.sequelize,db.Sequelize),
      Bill = require('../models/bill')(db.sequelize,db.Sequelize)

exports.show = (req,res) => {
  Usage.findAll().then((usage) => {
    const data = {
      status: 'success',
      code: 200,
      message: 'success load usage',
      data: usage
    }

    res.json(data)
  })
}

exports.detail = (req,res) => {
  const id_customer = req.params.id_customer

  Usage.findAll({
    where: {
      id_customer: id_customer
    }
  }).then((usage) => {
    const data = {
      status: 'success',
      code: 200,
      message: 'success load usage',
      data: usage
    }

    res.json(data)
  })
}

exports.create = (req,res) => {
  const body = req.body
  const id_customer = body.id_customer,
        month = body.month,
        year = body.year,
        start_meter = body.start_meter,
        finish_meter = body.finish_meter
     
  Usage.create({
    id_customer: id_customer,
    month: month,
    year: year,
    start_meter: start_meter,
    finish_meter: finish_meter
  }).then((usage) => {
    Bill.create({
      id_usage: usage.id,
      month: usage.month,
      year: usage.year,
      total_meter: usage.finish_meter - usage.start_meter,
      status: 'n'
    }).then(() => {
      const data = {
        status: 'success',
        code: 201,
        message: 'success create usage',
        data: usage
      }
  
      res.json(data)
    })
  })      
}

exports.delete = (req,res) => {
  const id_usage = req.body.id_usage
  db.sequelize.query('SELECT COUNT(*) as total FROM usages INNER JOIN bills ON usages.id=bills.id_usage INNER JOIN payments ON payments.id_bill=bills.id WHERE usages.id=?', {
    replacements: [id_usage],
    type: db.sequelize.QueryTypes.SELECT
  }).then((result) => {
    if(result[0].total == 0){
      Bill.destroy({
        where: {
          id_usage: id_usage
        }
      }).then(() => {
        Usage.destroy({
          where: {
            id: id_usage
          }
        }).then(() => {
          const data = {
            status: 'success',
            code: 203,
            message: 'success delete usage',
          }
  
          res.json(data)
        })
      })
    }else{
      const data = {
        status: 'success',
        code: 200,
        message: 'cant delete usage',
      }

      res.json(data)
    }
  })
}