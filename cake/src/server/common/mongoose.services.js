const mongoose = require('mongoose');
const config = require('../../../config').config

let count = 0;

const options = {
  autoIndex: true, // disable for live
  useCreateIndex: true,
  reconnectTries: 30, // Retry up to 30 times
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const connectWithRetry = () => {
  console.log('MongoDB connection with retry');

  mongoose.connect(config.db_connection, options).then(() => {
    console.log('MongoDB is connected')
  }).catch( err => {
    console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', ++count);
    console.log(err)
    setTimeout(connectWithRetry, 5000)
  })
}

connectWithRetry();

exports.mongoose = mongoose;
