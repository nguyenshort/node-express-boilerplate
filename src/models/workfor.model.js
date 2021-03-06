const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  doj: {
    type: Number,
    required: true,
    index: true,
  },
  people: {
    type: mongoose.Types.ObjectId,
    ref: 'People',
    required: true,
    index: true,
  },
  company: {
    type: mongoose.Types.ObjectId,
    ref: 'Company',
    required: true,
    index: true,
  },
  salary: {
    type: Number,
    required: true,
    index: true,
  },
});

module.exports = mongoose.model('WorkFor', schema);
