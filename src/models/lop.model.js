const mongoose = require('mongoose');

const sinhVienSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true,
  },
  numberStudent: {
    type: Number,
    min: 0,
    required: true,
    index: true,
  },
});

module.exports = mongoose.model('SinhVien', sinhVienSchema);
