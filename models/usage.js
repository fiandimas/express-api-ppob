const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsageSchema = new Schema({
  id_customer: Schema.Types.ObjectId,
  month: Number,
  year: Number,
  start_meter: Number,
  finish_meter: Number
})

module.exports = mongoose.model('usages', UsageSchema)