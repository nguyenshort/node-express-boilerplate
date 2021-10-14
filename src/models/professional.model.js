const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  degree: {
    type: String,
    required: true,
    index: true,
  },
  exp: {
    type: Number,
    required: true,
    index: true,
  },
});

module.exports = mongoose.model('Professional', schema);
