const mongoose = require('mongoose');
const TacoSchema = require('./taco');

const Taco = mongoose.model('takos', TacoSchema);

module.exports = {
  Taco
};
