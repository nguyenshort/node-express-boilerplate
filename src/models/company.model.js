const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  cname: {
    type: String,
    required: true,
    index: true,
  },
  address: {
    type: String,
    index: true,
  },
});

module.exports = mongoose.model('Company', schema);
