const run = require('./run');
const co = require('co');
/**
 * deploy
 */

// production model
global.WATCH = false;  // watch rebuild...
global.DEBUG = false;  // hot reload...
global.VERBOSE = false;  // verbose webpack info...

function deploy() {
  return co(function* () {
    yield run(require('./clean'));
    yield run(require('./bundle'));
    yield run(require('./server'));
    //yield run(require('./publish'));
  });
}

module.exports =  deploy;
