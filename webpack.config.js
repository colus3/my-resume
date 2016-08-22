var webpack = require('webpack');
var path = require('path');
const nodeExternals = require('webpack-node-externals');

var preLoaders = [
  {
    test: /\.js$/,
    loader: 'eslint',
    exclude: /(node_modules|bower_components)/
  }
];

var loaders = [
  { test: /\.js$/, loader: 'babel', exclude: /(node_modules|bower_components)/, query: { presets: ['es2015', 'react'] } },
  { test: /\.css$/,  loader: 'style!raw' },
  {
    test: /\.scss$/,
    loader: 'css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
  }
];

module.exports = [
  {
    name: 'browser',
    entry: './client/index.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      preLoaders: preLoaders,
      loaders: loaders
    },
/*    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ],*/
    devServer: {
      inline: true,
      port: 7777,
      contentBase: path.join(__dirname, '/public/')
    }
  },
  {
    name: 'server',
    target: 'node',
    entry: './server/index.js',
    externals: [ nodeExternals() ],
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'server.js',
      libraryTarget: 'commonjs2'
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel', exclude: /(node_modules|bower_components)/, query: { presets: ['es2015', 'react'] } },
        { test: /\.css$/,  loader: 'style!raw' },
        {
          test: /\.scss$/,
          loader: 'css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        },
        {
          test: /\.html$/,
          loader: 'html'
        }
      ]
    },
/*    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ],*/
  }
];