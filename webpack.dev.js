const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {

  entry: {
    app: "./src/entry/client",
  },

  output: {
    path: path.join(__dirname, '/build/'),
    filename: '[name].js',
    publicPath: '/',
  },

  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },

  watch: true,

  mode: "development"
});