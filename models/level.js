const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LevelSchema = new Schema({
  name: String
},{
  versionKey: false
})

module.exports = mongoose.model('levels', LevelSchema)