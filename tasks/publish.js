const ghpages = require('gh-pages');
const path = require('path');


function publish() {
  return new Promise((reslove, reject) => {

    const options = {
      src: '**/*',
      dotfiles: true,
      //add: true,  // never remove existing files
      branch: 'production',
      //message: 'Updates',
      //repo: 'https://example.com/other/repo.git',
      //user: {name: '', email: ''},
      clone: 'temp',
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

module.exports = publish;
