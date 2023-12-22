const mongoose = require('mongoose')


const Products = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  url1: {
    type: String,
    required: true
  },
  url2: {
    type: String,
    required: true
  },
  url3: {
    type: String
  },
  url4: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  }
}, { timestamps: true })
module.exports = new mongoose.model('addProduct', Products)     