const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userAccountSchema = new Schema({
  name: {type: String},
  email: {type: String},
  occupation: {type: String},
  profilePhoto: {type: String}
}, {
  timestamps: true
})

const columnFilterSchema = new Schema({
  name: {type: String},
  showCategory: {type: Boolean},
  showPriority: {type: Boolean},
  showUser: {type: Boolean},
  showOption: {type: Boolean}
}, {
  timestamps: true
})

const UserAccount = mongoose.model('UserAccount', userAccountSchema)
const ColumnFilter = mongoose.model('ColumnFilter', columnFilterSchema)

module.exports = { UserAccount, ColumnFilter }