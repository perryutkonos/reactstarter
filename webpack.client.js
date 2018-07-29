const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")

module.exports = merge(common, {

  entry: {
    client: "./src/entry/client",
  },

  module: {
    rules: [ //добавили babel-loader
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          "presets": ["env", "stage-0", "react"],
        }
      }, {
        test: /\.(html)$/,
        loader: 'file-loader?name=[name].[ext]'
      }, {
        test: /\.scss/,
        use: [
          ExtractCssChunks.loader,
          'css-loader',
          'sass-loader?resolve url'
        ]

      }
    ]
  },

  plugins: [
    new ExtractCssChunks(
      {
        filename: "style.css",
      }
    ),
  ],
  output: {
    path: path.join(__dirname, '/build/assets'),
    filename: '[name].js',
    publicPath: '/build/assets',
  },

  mode: "production"
});