//-----------------------------------------------
//  deploly your site
//-----------------------------------------------

const run = require('./run')
const co = require('co')

// Production model
global.DEBUG = false

function deploy() {
  return co(function* () {
    yield run(require('./clean'))
    yield run(require('./bundle'))
    yield run(require('./server'))
    /* yield run(require('./publish')) */
  })
}

module.exports =  deploy
