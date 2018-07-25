'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {

    output: {
        path: path.join(__dirname, '/build'),
        filename: '[name].js',
        publicPath: '/'
    },

    module: { //Обновлено
        rules: [ //добавили babel-loader
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    "presets": ["env", "stage-0", "react"],
                }
            }, {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader?resolve url'

            }, {
                test: /\.(html)$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    }
}