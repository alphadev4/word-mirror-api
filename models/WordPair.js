const mongoose = require('mongoose');

const wordPairSchema = new mongoose.Schema({
  originalWord: {
    type: String,
    required: true
  },
  mirroredWord: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('WordPair', wordPairSchema);

