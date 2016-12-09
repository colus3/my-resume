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
  },
  { test: /\.json$/, loader: 'json' }
];

var plugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  })
];

module.exports = [
  {
    name: 'browser',
    entry: './client/index.js',
    output: {
      path: path.join(__dirname, 'public/js'),
      filename: 'bundle.js'
    },
    module: {
      preLoaders: preLoaders,
      loaders: loaders
    },
    resolve: {
      root: path.resolve('./client')
    },
    plugins: plugins,
    devServer: {
      inline: true,
      port: 7777,
      contentBase: path.join(__dirname, '/public/'),
      historyApiFallback: true
    }
  },
  {
    name: 'server',
    target: 'node',
    entry: './server/serverside.js',
    externals: [ nodeExternals() ],
    output: {
      path: path.join(__dirname, 'public/js'),
      filename: 'server.js',
      libraryTarget: 'commonjs2'
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel', exclude: /(node_modules|bower_components)/, query: { presets: ['es2015', 'react', 'stage-0'] } },
        { test: /\.css$/,  loader: 'style!raw' },
        {
          test: /\.scss$/,
          loader: 'css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        }
      ]
    },
    resolve: {
      root: path.resolve('./client')
    },
    // plugins: plugins
  }
];