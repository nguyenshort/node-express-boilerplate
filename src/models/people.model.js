const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  sex: {
    type: Number,
    required: true,
    index: true,
  },
  dob: {
    type: Number,
    required: true,
    index: true,
  },
  phone: {
    type: Number,
  },
  address: {
    type: String,
    trim: true,
  }
});

module.exports = mongoose.model('People', schema);
