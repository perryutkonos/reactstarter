const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {

  entry: {
    client: "./src/entry/client",
  },

  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].js',
    publicPath: '/',
  },

  mode: "production"
});