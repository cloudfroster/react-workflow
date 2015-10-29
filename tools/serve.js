import path from 'path';
import nodemon from 'nodemon';

/**
 * Launches Node.js/Express web server in a separate (forked) process.
 */
function serve() {
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
        "js": "babel-node"
      },
      "script": path.join(__dirname, '../server/server.js'),
      "watch": [
        path.join(__dirname, '../server')
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

export default serve;
