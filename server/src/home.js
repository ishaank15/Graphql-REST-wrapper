const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
  createdAt: {
    default: Date.now,
    type: Date,
  },
  name: {
    required: true,
    type: String,
  },
});

const Home = mongoose.model('User', HomeSchema);
module.exports = Home;