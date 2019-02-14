const Admin = require('../models/admin')
const md5 = require('md5')
const ObjectId = require('mongodb').ObjectID

exports.show = (req,res) => {
  Admin.find({}, (err,result) => {
    if(err) throw err
    const data = {
      status: 'success',
      code: 200,
      msg: 'Success load all admin',
      data: result
    }

    res.json(data)
  })
}

exports.update = (req,res) => {
  const body = req.body
  Admin.findByIdAndUpdate({
    _id : ObjectId(body._id)
  },{ 
    name: body.name,
    username: body.username,
    password: body.password,
    id_role: ObjectId(body.id_role)
  },{
    new: true
  }, (err) => {
    if(err) throw err
    const data = {
      status: 'success',
      code: 200,
      msg: 'Success update admin',
    }

    res.json(data)
  })
}

exports.delete = (req,res) => {
  Admin.findByIdAndDelete(ObjectId(req.body._id), (err) => {
    if(err) throw err
    const data = {
      status: 'success',
      code: 200,
      msg: 'Success delete admin',
    }

    res.json(data)
  })
}

exports.login = (req,res) => {
  const username = req.body.username,
        password = req.body.password
  
  Admin.findOne({
    username: username
  }, (err,result) => {
    if(err) throw err;
    if(result == null){
      const data = {
        status: 'fail',
        code: 404,
        msg: 'Username not registered',
      }

      res.json(data)
    }else{
      if(result.password == md5(password)){
        const data = {
          status: 'success',
          code: 200,
          msg: 'Welcome ' + result.name,
          data: result
        }

        res.json(data)
      }else{
        const data = {
          status: 'fail',
          code: 404,
          msg: 'Password not match',
        }
  
        res.json(data)
      }
    }
  })
}