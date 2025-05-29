const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        clean: true // optional, clears dist before rebuild
    },
    module: {
        rules: [
            { 
                test: /\.ts$/, 
                use: [
                    { loader: 'babel-loader' },
                    { loader: 'ts-loader' } 
                    // loaders are executed from bottom-top so ts-loader runs first
                    //  compile TS to JS, then babel-loader transpiles 
                    // that JS to be browser-compatible.
                ],
                exclude: /node_modules/,
             },
             {
                test: /\.scss$/, // handles scss files
                use: [
                    'style-loader', // inject styles into dom
                    {
                        loader: 'css-loader', // turns css into js
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'sass-loader', // compiles sass to css
                        options: { sourceMap: true }
                    }
                ],
                exclude: /node_modules/,
             },
            //  {
            //     test: /\.(png|jpe?g|gif|svg)$/i,
            //     type: 'asset/resource',
            //     generator: {
            //         filename: 'images/[name][ext]', // optional: controls output path
            //     },
            // }

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
    devtool: 'source-map'


}