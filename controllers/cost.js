const Cost = require('../models/cost')
const ObjectdId = require('mongodb').ObjectID;

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

exports.update = (req,res) => {
  const body = req.body
  const _id = ObjectdId(body._id)

  Cost.findByIdAndUpdate({
    _id: _id 
  },
  {
    power: body.power,
    cost: body.cost
  }, (err,result) => {
    if(err) throw err
    const data = {
      status: 'success',
      code: 200,
      msg: 'Success update cost'
    }

    res.json(data)
  })
}

exports.delete = (req,res) => {
  Cost.findByIdAndDelete(ObjectdId(req.body._id), (err) => {
    if(err) throw err
    const data = {
      status: 'success',
      code: 200,
      msg: 'Success delete cost'
    }

    res.json(data)
  })
}