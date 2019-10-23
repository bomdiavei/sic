const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ad = new Schema({
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: 'categories'
  }
})

module.exports = mongoose.model('ads', Ad)