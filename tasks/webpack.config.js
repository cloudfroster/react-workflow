//-------------------------------------------------------------------------
//  export webpack config
//-------------------------------------------------------------------------

const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
}`

// for babel and other tool env
process.env.NODE_ENV = global.DEBUG ? 'development' : 'production'

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify(global.DEBUG ? 'development' : 'production'),
  __DEV__: global.DEBUG,
  __PRO__: !global.DEBUG,
}

//-------------------------------------------------------------------------
//  Configuration for the client-side bundle (app.js)
//-------------------------------------------------------------------------

const appConfig = {

  entry: [
    ...(global.DEBUG ? ['webpack-hot-middleware/client'] : []),
    path.join(__dirname, '../client/app.js'),
  ],

  output: {
    path: path.join(__dirname, '../build'),
    // if your want to cdn, just change here
    publicPath: '/',
    sourcePrefix: '',
    trunkFilename: global.DEBUG ? '[id].bundle.js' : '[id].[chunkhash].bundle.js',
    filename: global.DEBUG ? 'bundle.js' : '[chunkhash].[name].bundle.js',
  },

  devtool: global.DEBUG ? 'cheap-module-eval-source-map' : false,

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.less'],
    root: [
      path.join(__dirname, '../client/components'),
      path.join(__dirname, '../client/theme'),
    ],
  },

  plugins: [
    // create index.html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      cache: true,
      inject: true,
      template: 'html!./client/index.html',
      favicon: './client/favicon.ico',
      minify: global.DEBUG ? {} : {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }
    }),

    new ExtractTextPlugin(global.DEBUG ? 'app.css' : '[chunkhash].app.css'),

    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.DefinePlugin(GLOBALS),

    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: global.DEBUG ? 'commons.js' : '[chunkhash].[name].js',
      // (Modules must be shared between 2 entries)
      minChunks: 2,
      /* chunks: ["pageA", "pageB"], */
      // (Only use these entries)
    }),

    ...(!global.DEBUG ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
      //new webpack.optimize.AggressiveMergingPlugin(),
    ] : []),
    ...(global.DEBUG ? [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ] : []),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      }, {
        test: /\.(txt|md)$/,
        loader: 'raw-loader',
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=5000',
      }, {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
      }, {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?' + (global.DEBUG ? 'sourceMap' : '') + `!postcss-loader?${AUTOPREFIXER}`),
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?' + (global.DEBUG ? 'sourceMap' : '') + `!postcss-loader?${AUTOPREFIXER}!less-loader?` + (global.DEBUG ? 'sourceMap' : '')),
      },
    ],
  },

  postcss: () => {
    return [autoprefixer]
  },

  cache: global.DEBUG,
  debug: global.DEBUG,

  stats: {
    colors: true,
    reasons: global.DEBUG,
    hash: false,
    version: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    cached: false,
    cachedAssets: false,
  },

}

module.exports = appConfig
