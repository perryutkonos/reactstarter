const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {

  entry: {
    app: "./src/entry/client",
  },

  output: {
    path: path.join(__dirname, '/build/assets'),
    filename: '[name].js',
    publicPath: '/',
  },

  mode: "production",
});