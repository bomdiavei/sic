const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Category = new Schema({
  description: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('categories', Category)