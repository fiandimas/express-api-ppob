const db = require('../models/index')

exports.show = (req,res) => {
  db.sequelize.query('SELECT customers.kwh_number,customers.name as cname,payments.date,payments.month,payments.year,payments.admin_cost,payments.total,payments.status,payments.image,admins.name as aname FROM payments INNER JOIN admins ON payments.id_admin=admins.id INNER JOIN bills ON bills.id = payments.id_bill INNER JOIN usages ON usages.id=bills.id_usage INNER JOIN customers ON customers.id=usages.id_customer', {
    type: db.sequelize.QueryTypes.SELECT
  }).then((history) => {
    const data = {
      status: 'success',
      code: 200,
      message: 'success load history',
      data: history
    }

    res.json(data)
  })
}