'use strict';
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")

const env = process.env.NODE_ENV;
const IS_CLIENT = env === "browser";
const IS_SERVER = env === "server";

module.exports = {

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
        test: /\.(html|ttf)$/,
        loader: 'file-loader?name=[name].[ext]'
      }, {
        test: /\.scss/,
        use: IS_CLIENT ? [
          ExtractCssChunks.loader,
          'css-loader',
          'sass-loader?resolve url'
        ] : IS_SERVER ? [
          'css-loader/locals',
          'sass-loader?resolve url'
        ] : [
          'style-loader',
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

}