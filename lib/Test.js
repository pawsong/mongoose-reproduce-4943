const mongoose = require('mongoose');

const NestedSchema = new mongoose.Schema({
  arr: [{
    str: { type: String, default: '' },
  }],
});

const TestSchema = new mongoose.Schema({
  nested: {
    type: NestedSchema,
    default: null,
  },
});

module.exports = mongoose.model('Test', TestSchema);
