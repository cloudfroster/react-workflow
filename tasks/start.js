const run = require('./run');
const co = require('co');
/**
 * Launches a development web server with "live reload" functionality -
 * synchronizing URLs, interactions and code changes across multiple devices.
 */

// Development model proposed all open
global.WATCH = true;
global.DEBUG = true;
global.NODEMON = true;


function start() {
  return co(function* () {
    yield run(require('./clean'));
    yield run(require('./bundle'));
    yield run(require('./server'));
    yield run(require('./browserSync'));
  });
}

module.exports =  start;
