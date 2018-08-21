const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  createdAt: {
    default: Date.now,
    type: Date,
  },
  name: {
    required: true,
    type: String,
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;