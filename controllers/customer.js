const Customer = require('../models/customer')
const ObjectId = require('mongodb').ObjectID
const md5 = require('md5')

exports.show = (req,res) => {
  Customer.find({}, (err,result) => {
    if(err) throw err
    const data = {
      status: 'success',
      code: 200,
      msg: 'Success load all customer',
      data: result
    }

    res.json(data)
  })
}

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

exports.update = (req,res) => {
  const body = req.body
  const name = body.name,
        username = body.username,
        password = body.password,
        address = body.address,
        kwh_number = body.kwh_number,
        id_cost = body.id_cost
  
  Customer.findByIdAndUpdate({
    _id: ObjectId(body._id)
  },{
    name: name,
    username:username,
    password: password,
    address: address,
    kwh_number: kwh_number,
    id_cost: id_cost
  }, (err) => {
    if(err) throw err
    const data = {
      status: 'success',
      code: 200,
      msg: 'Success update customer'
    }

    res.json(data)
  })
}

exports.delete = (req,res) => {
  Customer.findByIdAndDelete({
    _id: ObjectId(req.body._id)
  }, (err) => {
    if(err) throw err
    const data = {
      status: 'success',
      code: 200,
      msg: 'Success delete customer'
    }

    res.json(data)
  })
}