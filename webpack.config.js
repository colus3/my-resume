var webpack = require('webpack');
var path = require('path');

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
  { test: /\.scss$/, loader: 'style!css!sass' }
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
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ],
    devServer: {
      inline: true,
      port: 7777,
      contentBase: path.join(__dirname, '/public/')
    }
  }
];