const del = require('del');

/**
 * Cleans up the output (build) directory.
 */
function clean() {
  return new Promise((reslove, reject) => {
  	try{
  		del(['.tmp', 'build/*'], { dot: true });
  		reslove();
  	}catch(e) {
  		reject(e);
  	}
  });
}

module.exports = clean;
