const run = require('./run');
const co = require('co');
/**
 * deploy
 */

// production model
global.WATCH = false;  // watch rebuild...
global.DEBUG = false;  // hot reload...
global.VERBOSE = true;  // verbose webpack info...


function start() {
  return co(function* () {
    yield run(require('./clean'));
    yield run(require('./bundle'));
    yield run(require('./replace'));
    yield run(require('./server'));
  });
}

module.exports =  start;
