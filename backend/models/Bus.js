const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  name: { type: String, required: true },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  totalSeats: { type: Number, required: true },
  availableSeats: { type: Number, required: true },
});

module.exports = mongoose.model('Bus', busSchema);
