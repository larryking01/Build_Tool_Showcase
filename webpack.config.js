const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        // clean: true // optional, clears dist before rebuild
    },
    module: {
        rules: [
            { 
                test: /\.ts$/, 
                use: 'ts-loader'
             },
             {
                test: /\.scss$/, // handles scss files
                use: [
                    'style-loader', // inject styles into dom
                    'css-loader', // turns css into js
                    'sass-loader', // compiles sass to css
                ]
             }
        ]
    },
    devServer: { // webpack local development setup
        static: './dist',
        open: true, 
        port: 3000
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [ // set up html and point webpack to its location
        new HtmlWebpackPlugin({
        template: './public/index.html',
        }),
    ],


}