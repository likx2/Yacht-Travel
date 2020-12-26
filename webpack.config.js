'use strict';

let path = require('path');

module.exports = {
    mode: 'development',
    entry: '/src/js/main.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist/js'
    },
    watch: true,
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};