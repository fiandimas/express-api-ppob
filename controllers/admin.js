const Admin = require('../models/admin')
const md5 = require('md5')

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