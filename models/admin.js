const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminSchema = new Schema({
  name: String,
  username: String,
  password: String,
  id_role: Schema.Types.ObjectId
},{
  versionKey: false
})

module.exports = mongoose.model('admins', AdminSchema)