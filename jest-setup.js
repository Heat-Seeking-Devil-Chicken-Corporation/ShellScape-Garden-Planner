const regeneratorRuntime = require('regenerator-runtime');

module.exports = () => {
  global.testServer = require('./server/server.js');
};
