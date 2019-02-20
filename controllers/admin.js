const db = require('../models/index'),
      Admin = require('../models/admin')(db.sequelize,db.Sequelize),
      md5 = require('md5')

exports.show = (req,res) => {
  Admin.findAll().then((admin) => {
    const data = {
      status: 'success',
      code: 200,
      message: 'success load level',
      data: admin
    }

    res.json(data)
  })
}

exports.create = (req,res) => {
  const body = req.body
  const name = body.name,
        username = body.username,
        password = md5(body.password),
        id_level = body.id_level
  
  Admin.create({
    name: name,
    username: username,
    password: password,
    id_level: id_level
  }).then((admin) => {
    const data = {
      status: 'success',
      code: 201,
      message: 'success create level',
      data: admin
    }

    res.json(data)
  })
}

exports.update = (req,res) => {
  const body = req.body
  const id = req.params.id
        name = body.name,
        id_level = body.id_level

  Admin.update({
    name: name,
    id_level: id_level
  },{
    where: {
      id: id
    }
  }).then(() => {
    const data = {
      status: 'success',
      code: 200,
      message: 'success update admin'
    }

    res.json(data)
  }).catch((err) => {
    res.json(err)
  })
}

exports.delete = (req,res) => {
  const id = req.params.id

  Admin.destroy({
    where: {
      id: id
    }
  }).then(() => {
    const data = {
      status: 'success',
      code: 203,
      message: 'success delete admin'
    }

    res.json(data)
  })
}

exports.login = (req,res) => {
  const body = req.body
  const username = body.username,
        password = md5(body.password)

  Admin.findOne({
    where: {
      username: username
    }
  }).then((admin) => {
    if(admin == null){
      const data = {
        status: 'success',
        code: 200,
        message: 'username not registered'
      }
  
      res.json(data)
    }else{
      if(admin.password == password){
        const data = {
          status: 'success',
          code: 200,
          message: 'Welcome ' + admin.name
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