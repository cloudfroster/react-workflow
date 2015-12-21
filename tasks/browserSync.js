//---------------------------------------------------------------
//  use browserSync to proxy development server
//---------------------------------------------------------------

const bs = require('browser-sync').create()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config')  // Client-side bundle configuration
const bundler = webpack(webpackConfig)

function browserSync() {
  return new Promise((reslove, reject) => {
    try {
      bs.init({
        proxy: {

          target: 'localhost:5000',

          middleware: [
            webpackDevMiddleware(bundler, {
              // IMPORTANT: dev middleware can't access config, so we should
              // provide publicPath by ourselves
              publicPath: webpackConfig.output.publicPath,

              // display nothing to the console
              quiet: true,

              // Pretty colored output
              stats: webpackConfig.stats,

              // display no info to console (only warnings and errors)
              noInfo: true,

              // For other settings see
              // http://webpack.github.io/docs/webpack-dev-middleware.html
            }),

            // bundler should be the same as webpackDevMiddleware's bundler
            webpackHotMiddleware(bundler),
          ],
        },

        // no need to watch '*.js' here, webpack will take care of it for us,
        // including full page reloads if HMR won't work
        files: [
          './build/**/*.css',
          './build/**/*.html',
          '!./build/**/*.js',
        ],
    })
    reslove()
  } catch (e) {
      reject(e)
    }
  })
}

module.exports = browserSync
