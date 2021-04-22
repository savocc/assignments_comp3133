const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
    unique: true
  },

    username: {
    type: String,
    required: [true, 'Please enter first name'],
    trim: true,
    unique: true,
    lowercase: true,
  },

  email:{
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  
  password:{
    type: String,
    required: true,
    lowercase: true
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;