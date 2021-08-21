const mongoose = require('mongoose');

// A Spot represents a point on the map where we (NasaLite) would like to go or have been.
// We will be able to rate a 'Spot'
// In the future, we will be able to:
//  - add a ['Comment'] to the 'Spot'
//  - add a ['Category'] to the 'Spot'

const SpotSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
    min: 3,
  },
  description: {
    type: String,
    require: true,
    min: 3,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  lat: {
    type: Number,
    require: true,
  },
  lon: {
    type: Number,
    require: true,
  },
  location: String,  // e.g., Neighborhood
  img: String,
  priority: {
    type: Number,
    min: 0,
    max: 5,
  },
  occasion: String,
}, { timestamps: true });

module.exports = mongoose.model('Spot', SpotSchema);