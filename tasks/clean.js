//---------------------------------------------------------------------
//  Cleans up the output (build) directory
//---------------------------------------------------------------------

const del = require('del')

function clean() {
  return new Promise((reslove, reject) => {
  	try{
  		del(['.tmp', 'build/*'], { dot: true })
  		reslove()
  	}catch(e) {
  		reject(e)
  	}
  })
}

module.exports = clean
