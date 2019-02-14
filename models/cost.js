const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CostSchema = new Schema({
  power: Number,
  cost: Number
},{
  versionKey: false
})

module.exports = mongoose.model('costs', CostSchema)