const path = require('path');
const nodemon = require('nodemon');

/**
 * Launches Node.js/Express web server in a separate (forked) process.
 */
function server() {
  function restart() {
    console.log("App restarted due to:\n'$FILENAME'\" with title \"nodemon\"'");
  }
  return new Promise((resolve, reject) => {
    nodemon({
      "restartable": "rs",
      "ignore": [
        ".git",
        "node_modules/**/node_modules"
      ],
      "verbose": true,
      "execMap": {
        "js": "node"
      },
      "script": path.join(__dirname, '../server/server.js'),
      "watch": [
        path.join(__dirname, '../server/server.js')
      ],
      "env": {
        "NODE_ENV": "development"
      },
      "ext": "js json"
    }).on('restart', () => {
    });
    resolve();
  });
}

module.exports = server;