const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")

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
    libraryTarget: 'commonjs2',
  },


  module: {
    rules: [ //добавили babel-loader
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          "presets": ["env", "stage-0", "react", "es2017"],
        }
      }, {
        test: /\.(html)$/,
        loader: 'file-loader?name=[name].[ext]'
      }, {
        test: /\.scss/,
        use: [
          'css-loader/locals',
          'sass-loader?resolve url'
        ]
      }
    ]
  },
  target: 'node',
  mode: "production",
});