const ghpages = require('gh-pages');
const path = require('path');
const fs = require('fs-extra');

function publish() {
  return new Promise((reslove, reject) => {

    copyFileToBuild()

    const options = {
      src: '**/*',
      dotfiles: true,
      //add: true,  // never remove existing files
      //branch: 'production',
      //message: 'Updates',
      //repo: 'https://example.com/other/repo.git',
      //user: {name: '', email: ''},
      //clone: 'temp',
      //push: true,
      //silent: true,
      //logger: function(string){},
      //git: '/path/to/git',
    }

    ghpages.publish(path.join(__dirname, '../build'), options, function(err) {
      if(err) {
        reject(err)
      }
      reslove()
    });
  })
}

// copy file to build folder
function copyFileToBuild() {

  const colors = require('colors')

  function isInArray(value, array) {
    for(var i = 0, len = array.length; i < len; i++) {
      if(value === array[i]) {
        return true
      }
    }
    return false
  }

  const filter = function(pathname) {
    const pickFiles = ['README.md', 'processes.json']
    const name = pathname.split('\\').pop()
    const dirname = __dirname.split('\\')
    return name === dirname[dirname.length - 2] || isInArray(name, pickFiles)
  }

  fs.copy(path.join(__dirname, '../'), path.join(__dirname, '../build'), filter, function(err) {
    if(err) {
      throw err
    }
    console.log('copy file to build folder finished!'.cyan)
  })
}

module.exports = publish;
