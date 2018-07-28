const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {

  entry: {
    app: "./src/entry/server",
  },

  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].js',
    publicPath: '/',
    library: 'app',
    libraryExport: 'default',
    libraryTarget:'commonjs2',
  },

  target: 'node',
  mode: "production",
});