module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /(node_modules|bower_components)/
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }, {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};