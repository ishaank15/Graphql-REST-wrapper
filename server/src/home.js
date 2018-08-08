// import Promise from 'bluebird';
// import httpStatus from 'http-status';
// import mongoose from 'mongoose';
const mongoose = require('mongoose');

/**
 * Home Schema
 */
/**
 * @swagger
 * definitions:
 * Home:
 * properties:
 * name:
 * type: string
 */

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

/**
 * Add your
 * - pre-save hook
 * - validation
 * - virtual
 */

/**
 * Methods
 */
HomeSchema.method({

});

/**
 * Statics
 */
HomeSchema.statics = {
  list({
    skip = 0,
    limit = 50
  } = {}) {
    return this.find()
      .sort({
        createdAt: -1
      })
      .skip(+skip)
      .limit(+limit)
      .exec();
  },
};

const Home = mongoose.model('User', HomeSchema);
module.exports = Home;