const path = require('path')

module.exports = {
  devServer: {
    contentBase: './public',
    port: 8001
  },

  entry: {
    sampleapp: './src/web/index.js'
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
