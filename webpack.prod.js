const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {

  target: 'node',
  mode: "production",

  entry: {
    server: "./src/entry/server",
  },

  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].js',
    publicPath: '/',
    library: 'app',
    libraryExport: 'default',
    libraryTarget: 'commonjs2',
  },
});