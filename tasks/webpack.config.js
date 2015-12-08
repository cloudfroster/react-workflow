const path = require('path');
const webpack = require('webpack');
const merge = require('lodash.merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DEBUG = global.DEBUG;
const VERBOSE = global.VERBOSE;
const WATCH = global.WATCH;
const ENTRY = '../client/app.js';  // webpack entry
const OUTPUT = '../build';  // webpack output
const AUTOPREFIXER = `{
  browsers: [
    'Android >= 4',
    'Chrome >= 35',
    'Firefox >= 31',
    'Explorer >= 9',
    'iOS >= 7',
    'Opera >= 12',
    'Safari >= 7.1',
  ],
}`;
const GLOBALS = {
  'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
  __DEV__: DEBUG,
};
const JS_LOADER = {
  test: /\.jsx?$/,
  exclude: /(node_modules)/,
  loader: 'babel-loader',
};

// client-side (app.js)
// -----------------------------------------------------------------------------

const config = {
  output: {
    publicPath: '/',
    sourcePrefix: '',
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
    new HtmlWebpackPlugin({  // create index.html
      filename: 'index.html',
      inject: true,
      template: 'html?removeOptionalTags=false!./client/index.html',
      favicon: './client/favicon.ico',
    }),
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
      loader: 'url-loader?limit=10000',  // 10kb
    }, {
      test: /\.(eot|ttf|wav|mp3)$/,
      loader: 'file-loader',
    }, ],
  },

};

//
// Configuration for the client-side bundle (app.js)
// -----------------------------------------------------------------------------

const appConfig = merge({}, config, {
  entry: [
    ...(WATCH ? ['webpack-hot-middleware/client'] : []),
    path.join(__dirname, ENTRY),
  ],
  output: {
    trunkFilename: DEBUG ? '[id].bundle.js' : '[id].[chunkhash].bundle.js',
    path: path.join(__dirname, OUTPUT),
    filename: DEBUG ? 'bundle.js' : '[chunkhash].[name].bundle.js',
  },

  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: DEBUG ? 'cheap-module-eval-source-map' : false,
  plugins: [
    ...config.plugins,
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      // (the commons chunk name)

      filename: DEBUG ? 'commons.js' : '[chunkhash].[name].js',
      // (the filename of the commons chunk)

      minChunks: 3,
      // (Modules must be shared between 3 entries)

      // chunks: ["pageA", "pageB"],
      // (Only use these entries)
    }),
    //new ExtractTextPlugin("style.css"),
    ...(!DEBUG ? [
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
      WATCH ? merge({}, JS_LOADER
        /*{  //暂时弃用,等到兼容babel6
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
             }*/
      ) : JS_LOADER,
      ...config.module.loaders, {
        test: /\.less$/,
        loader: 'style-loader!css-loader?' + (DEBUG ? 'sourceMap' : '') + `!autoprefixer-loader?${AUTOPREFIXER}!less-loader`,
      }, {
        test: /\.css/,
        loader: 'style-loader!css-loader?' + (DEBUG ? 'sourceMap' : '') + `!autoprefixer-loader?${AUTOPREFIXER}`,
      }
    ],
  },
});

module.exports = appConfig;
