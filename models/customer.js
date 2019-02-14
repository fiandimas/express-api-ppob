const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustomerSchema = new Schema({
  name: String,
  username: String,
  password: String,
  address: String,
  kwh_number: Number,
  id_cost: Schema.Types.ObjectId
},{
  versionKey: false
})

module.exports = mongoose.model('customers', CustomerSchema)