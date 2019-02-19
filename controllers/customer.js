const db = require('../models/index'),
      Customer = require('../models/customer')(db.sequelize,db.Sequelize),
      md5 = require('md5')

exports.show = (req,res) => {
  Customer.findAll().then((customer) => {
    const data = {
      status: 'success',
      code: 200,
      message: 'success load customer',
      data: customer
    }

    res.json(data)
  })
}

exports.create = (req,res) => {
  const body = req.body
  const name = body.name,
        username = body.username,
        password = md5(body.password),
        address = body.address,
        kwh_number = body.kwh_number,
        id_cost = body.id_cost
  
  Customer.create({
    name: name,
    username: username,
    password: password,
    address: address,
    kwh_number: kwh_number,
    id_cost: id_cost
  }).then(() => {
    const data = {
      status: 'success',
      code: 201,
      message: 'success create customer'
    }

    res.json(data)
  })
}

exports.update = (req,res) => {
  const body = req.body
  const id = body.id
        name = body.name,
        address = body.address,
        kwh_number = body.kwh_number,
        id_cost = body.id_cost
  
  Customer.update({
    name: name,
    address: address,
    kwh_number: kwh_number,
    id_cost: id_cost
  },{
    where: {
      id: id
    }
  }).then(() => {
    const data = {
      status: 'success',
      code: 200,
      message: 'success update customer'
    }

    res.json(data)
  })
}

exports.delete = (req,res) => {
  const id = req.body.id

  Customer.destroy({
    where: {
      id: id
    }
  }).then(() => {
    const data = {
      status: 'success',
      code: 203,
      message: 'success delete customer'
    }

    res.json(data)
  })
}

exports.login = (req,res) => {
  const body = req.body
  const username = body.username,
        password = md5(body.password)
  
  Customer.findOne({
    where: {
      username: username
    }
  }).then((customer) => {
    if(customer == null){
      const data = {
        status: 'success',
        code: 200,
        message: 'username not registered'
      }
        
      res.json(data)
    }else{
      if(customer.password == password){
        const data = {
          status: 'success',
          code: 200,
          message: 'Welcome ' + customer.name
        }
         
        res.json(data)
      }else{
        const data = {
          status: 'success',
          code: 200,
          message: 'wrong password'
        }
        
        res.json(data)
      }
    }
  })
}