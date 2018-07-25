const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {

  entry: {
    app: "./src/entry/server",
  },

  mode: "production",
});