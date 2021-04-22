const mongoose = require('mongoose');
const User = require('./User')
const Hotel = require('./Hotel')

const BookingSchema = new mongoose.Schema({

  hotel_id: {
    type: Number,
    required: true,
  },
  
  user_id: {
    type: Number,
    required: true,
  },

  date:{
    type: String,
    required: true,
    default: Date.now,
  },
  start: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  end: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
}, {strict: false});

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;