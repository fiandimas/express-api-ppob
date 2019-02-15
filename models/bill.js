const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BillSchema = new Schema({
  id_usage: Schema.Types.ObjectId,
  month: Number,
  year: Number,
  total_meter: Number,
  status: {
    type: String,
    enum: ['y','n','r','p']
  }
},{
  versionKey: false
})

module.exports = mongoose.model('bills', BillSchema)