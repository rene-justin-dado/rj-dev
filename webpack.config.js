const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'src', 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // Babel Loader
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
}
