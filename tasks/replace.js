const gulp = require('gulp')
const htmlreplace = require('gulp-html-replace')
const assets = require('../webpack-assets.json')
const webpackConfig = require('./webpack.config')

function getReplaceHtmlName() {
  const names = []
  for(var key in assets) {
    names.push(assets[key]['js'].split('.')[1])
  }
  return names
}

function replace() {
  return new Promise((reslove, reject) => {
    const names = getReplaceHtmlName()

    for(var i = 1; i < names.length; i++) {
      gulp.src('static/index.html')
            .pipe(htmlreplace({
                'js': [`${webpackConfig.output.publicPath}${assets[names[0]]['js']}`, `${webpackConfig.output.publicPath}${assets[names[i]]['js']}`]
            }))
            .pipe(gulp.dest('static/index.html'));
    }
  })
}

module.exports = replace
