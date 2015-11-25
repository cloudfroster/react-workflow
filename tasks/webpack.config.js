const path = require('path');
const webpack = require('webpack');
const merge = require('lodash.merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DEBUG = process.argv.indexOf('--release') < 0 ? true : false;
const VERBOSE = process.argv.indexOf('--verbose') < 0 ? false : true;
const WATCH = global.WATCH === undefined ? false : global.WATCH;
const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];
const GLOBALS = {
  'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
  __DEV__: DEBUG,
};
const JS_LOADER = {
  test: /\.jsx?$/,
  include: [
    path.join(__dirname, '../node_modules/react-routing/src'),
    path.join(__dirname, '../client')
  ],
  loader: 'babel-loader',
};

//
// Common configuration chunk to be used for both
// client-side (app.js) and server-side (server.js) bundles
// -----------------------------------------------------------------------------

const config = {
  output: {
    publicPath: '/build',
    sourcePrefix: '  ',
  },

  cache: DEBUG,
  debug: DEBUG,

  stats: {
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE,
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
  ],

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.less'],
  },

  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.txt$/,
      loader: 'raw-loader',
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
      loader: 'url-loader?limit=10000',
    }, {
      test: /\.(eot|ttf|wav|mp3)$/,
      loader: 'file-loader',
    }, ],
  },

  postcss: function plugins(bundler) {
    return [
      require('postcss-cssnext')({
        autoprefixer: AUTOPREFIXER_BROWSERS
      }),
    ];
  },
};

//
// Configuration for the client-side bundle (app.js)
// -----------------------------------------------------------------------------

const appConfig = merge({}, config, {
  entry: [
    ...(WATCH ? ['webpack-hot-middleware/client'] : []),
    './client/app.js',
  ],
  output: {
    path: path.join(__dirname, '../static/build'),
    filename: 'bundle.js',
  },

  // Choose a developer tool to enhance debugging
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: DEBUG ? 'cheap-module-eval-source-map' : false,
  plugins: [
    ...config.plugins,
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new ExtractTextPlugin("style.css"),
    ...(!DEBUG ? [
      //new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: VERBOSE,
        },
      }),
      //new webpack.optimize.AggressiveMergingPlugin(),
    ] : []),
    ...(WATCH ? [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ] : []),
  ],
  module: {
    loaders: [
      WATCH ? merge({}, JS_LOADER /*{  //暂时弃用,等到兼容babel6
        query: {
          // Wraps all React components into arbitrary transforms
          // https://github.com/gaearon/babel-plugin-react-transform
          plugins: ['react-transform'],
          extra: {
            'react-transform': {
              transforms: [{
                transform: 'react-transform-hmr',
                imports: ['react'],
                locals: ['module'],
              }, {
                transform: 'react-transform-catch-errors',
                imports: ['react', 'redbox-react'],
              }, ],
            },
          },
        },
      }*/) : JS_LOADER,
      ...config.module.loaders, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("css-loader?sourceMap!postcss-loader?sourceMap!less-loader?sourceMap"),
      }, {
        test: /\.css$/,
        loader: ("style-loader!css-loader"),
      },
    ],
  },
});

module.exports = appConfig;
