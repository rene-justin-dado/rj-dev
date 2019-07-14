const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'src', 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      // Babel Loader
      {
        loader: 'babel-loader?cacheDirectory',
        test: /\.jsx?$/,
        exclude: 'node_modules'
      }
    ]
  },
  sassLoader: {
    file: path.resolve(__dirname, 'src', 'public', 'styles', 'main.scss'),
    includePaths: [path.resolve(__dirname, 'src', 'public', 'styles')],
    outFile: path.resolve(__dirname, 'src', 'public', 'styles', 'main.css'),
    outputStyle: 'compressed'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
}
