const Level = require('../models/level')

exports.show = (req,res) => {
  Level.find({}, (err,result) => {
    if(err) throw err;
    const data = {
      status: 'success',
      code: 200,
      data: result
    }

    res.json(data)
  })
}