const Usage = require('../models/usage')
const Bill = require('../models/bill')
const ObjectId = require('mongodb').ObjectID

exports.show = (req,res) => {
  Usage.find({}, (err,result) => {
    if(err) throw err
    const data = {
      status: 'success',
      code: 200,
      msg: 'Success load usage',
      data: result
    }

    res.json(data)
  })
}

exports.detail = (req,res) => {
  const id_customer = ObjectId(req.body._id)
  Usage.findOne({
    id_customer: id_customer
  }, (err,result) => {
    if(err) throw err
    const data = {
      status: 'success',
      code: 200,
      msg: 'Success load detail usage',
      data: result
    }

    res.json(data)
  })
}

exports.create = (req,res) => {
  const body = req.body
  const id_customer = ObjectId(body.id_customer),
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
  }, (err,result) => {
    if(err) throw err
    Bill.create({
      id_usage: ObjectId(result._id),
      month: result.month,
      year: result.year,
      total_meter: result.finish_meter - result.start_meter 
    }, (err,result) => {
      if(err) throw err
      const data = {
        status: 'success',
        code: 200,
        msg: 'Success add usage',
      }

      res.json(data)
    })
  })      
}