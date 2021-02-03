const initDB = require('../lib/connection');

module.exports = async () => {
  await initDB();
};
