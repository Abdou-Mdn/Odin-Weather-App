const path = require('path');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.API_KEY': JSON.stringify("GQ9CS732CEKG55K85Y6JJ248D"),
        }),
    ],
};