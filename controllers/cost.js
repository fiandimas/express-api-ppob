const db = require('../models/index'),
      Cost = require('../models/cost')(db.sequelize,db.Sequelize)

exports.show = (req,res) => {
  Cost.findAll().then((cost) => {
    const data = {
      status: 'success',
      code: 200,
      message: 'success load cost',
      data: cost
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
  }).then(() => {
    const data = {
      status: 'success',
      code: 201,
      message: 'success create cost',
      data: cost
    }

    res.json(data)
  })
}

exports.update = (req,res) => {
  const body = req.body
  const id = req.params.id,
        power = body.power,
        cost = body.cost

  Cost.update({
    power: power,
    cost: cost
  },{
    where: {
      id: id
    }
  }).then(() => {
    const data = {
      status: 'success',
      code: 200,
      message: 'success update cost'
    }

    res.json(data)
  })      
}

exports.delete = (req,res) => {
  const id = req.params.id

  Cost.destroy({
    where: {
      id: id
    }
  }).then(() => {
    const data = {
      status: 'success',
      code: 203,
      message: 'success delete cost'
    }

    res.json(data)
  })
}