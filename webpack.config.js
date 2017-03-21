/* eslint-disable no-var */

module.exports = {
  entry: {
    sampleapp: './src/sample-app.js'
  },
  output: {
    filename: 'build/[name].js',
    // Export the library as a global var:
    libraryTarget: 'var',
    // Name of the global var:
    library: '[name]'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
