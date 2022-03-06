const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
  }
}