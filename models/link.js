const mongoose = require('mongoose')
const Schema = mongoose.Schema

const linkSchema = new Schema({
  fullLink: {
    type: String,
    required: true
  },
  newLink: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('link', linkSchema)