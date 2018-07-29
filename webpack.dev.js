const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');
console.log(common.commonLoaders);
module.exports = merge(common, {

  entry: {
    app: "./src/entry/client",
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
          'style-loader',
          'css-loader',
          'sass-loader?resolve url'
        ]
      }
    ]
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