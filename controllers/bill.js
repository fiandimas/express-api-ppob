const Bill = require('../models/bill')

exports.show = (req,res) => {
  Bill.find({}, (err,result) => {
    if(err) throw err
    const data = {
      status: 'success',
      code: 200,
      msg: 'Success load bill',
      data: result
    }

    res.json(data)
  })
}