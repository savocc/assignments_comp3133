const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
  hotel_id: {
    type: Number,
    required: true,
    unique: true
  },

  hotel_name: {
    type: String,
    required: [true, 'Please enter hotel name'],
    trim: true,
    lowercase: true,
    unique: true
  },
  
  email: {
    type: String,
    required: true,
    unique: [true, "Duplicate Email Not allowed"],
    trim: true,
    lowercase: true,
  },
  postal_code: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  city:{
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  street: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  price: {
    type: Number,
    default: 0.0,
    //min: [1000, 'Too less price'],
    //max: 12000,
    validate(value) {
      if (value < 0.0){
         throw new Error("Negative price aren't real.");
      }
    }
  },
}, {strict: false});

const Hotel = mongoose.model("Hotel", HotelSchema);
module.exports = Hotel;