'use strict';

let path = require('path');

module.exports = {
    mode: 'development',
    entry: '/src/static/js/main.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist/static/js'
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