const Customer = require('../models/customer')
const ObjectId = require('mongodb').ObjectID
const md5 = require('md5')

exports.create = (req,res) => {
  const body = req.body
  const name = body.name,
        username = body.username,
        password = body.password,
        address = body.address,
        kwh_number = body.kwh_number,
        id_cost = body.id_cost
  
  Customer.create({
    name: name,
    username: username,
    password: md5(password),
    address: address,
    kwh_number: kwh_number,
    id_cost: ObjectId(id_cost)
  }, (err,result) => {
    if(err) throw err
    const data = {
      status: 'success',
      code: 200,
      msg: 'Success add customer',
      data: result
    }

    res.json(data)
  })      
}