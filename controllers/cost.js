const Cost = require('../models/cost')

exports.show = (req,res) => {
  Cost.find({}, (err,result) => {
    if(err) throw err
    const data = {
      status: 'success',
      code: 200,
      msg: 'Success load all cost',
      data: result
    }

    res.json(data)
  })
}

exports.create = (req,res) => {
  const body = req.body
  const power = body.power,
        cost = body.cost
  
  Cost.create({
    power: power,
    cost: cost
  }, (err,result) => {
    if(err) throw err
    let data = {
      status: 'success',
      code: 200,
      msg: 'Success add cost',
      data: result
    }

    res.json(data)
  })
}