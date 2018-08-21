const Promise = require('bluebird') ; // eslint-disable-line no-global-assign
const mongoose = require('mongoose') ;

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;
class Database {
  static open({
    mongoUri,
    testEnv
  }) {
    return new Promise((resolve, reject) => {
      // Mongoose options
      const options = {
        autoIndex: false, // Don't build indexes
        bufferMaxEntries: 0,
        keepAlive: 1,
        poolSize: 10, // Maintain up to 10 socket connections
        reconnectInterval: 500, // Reconnect every 500ms
        reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
        useNewUrlParser: true,
      };

      // Mock the mongoose for testing purpose using Mockgoose
      // connect to mongo db
      mongoose.connect(mongoUri, options, (err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });

      mongoose.connection.on('error', () => {
        return reject(`Unable to connect to database: ${mongoUri}`);
      });

    });
  }

  static close() {
    mongoose.disconnect();
  }
}

module.exports = Database;
