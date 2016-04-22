//---------------------------------------------------------------------
//  publish build folder to github gh-pages branch
//---------------------------------------------------------------------

'use strict'
const ghpages = require('gh-pages')
const path = require('path')

function publish() {
  return new Promise((reslove, reject) => {

    const options = {
      src: ['build/**/*', 'README.md', 'LICENSE.txt', 'processes.json'],
      dotfiles: true,
      //add: true,  // never remove existing files
      //branch: 'production',
      //message: 'Updates',
      //repo: 'https://example.com/other/repo.git',
      //user: {name: '', email: ''},
      //clone: 'temp',
      //push: true,
      //silent: true,
      logger: function(message){
        console.log(message)
      },
      //git: '/path/to/git',
    }

    ghpages.publish(path.join(__dirname, '../'), options, function(err) {
      if(err) {
        reject(err)
      }
      reslove()
    })
  })
}

module.exports = publish
