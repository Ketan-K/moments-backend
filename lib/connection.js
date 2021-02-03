const mongoose = require('mongoose');
const { reportError } = require('../utils/response');

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = () => new Promise((resolve, reject) => {
  mongoose.connect(process.env.MONGO_DB_CONNECT_STRING, {
    useNewUrlParser: true, useUnifiedTopology: true,
  });
  mongoose.connection.once('open', () => {
    console.info('connected to DB');
    resolve(true);
  }).on('error', (err) => {
    reportError('Error in DB connection', err);
    reject(err);
  });
});
