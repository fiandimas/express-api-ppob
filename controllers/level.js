const db = require('../models/index')
const Level = require('../models/level')(db.sequelize,db.Sequelize)

exports.show = (req,res) => {
  Level.findAll().then((level) => {
    const data = {
      status: 'success',
      code: 200,
      message: 'success load level',
      data: level
    }

    res.json(data)
  })
}