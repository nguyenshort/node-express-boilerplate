const mongoose = require('mongoose');

const sinhVienSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true,
  },
  address: {
    type: String,
    index: true,
    required: true,
  },
  born: {
    type: Number,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Lop', sinhVienSchema);
