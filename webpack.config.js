const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'index.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true 
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
                test: /\.scss$/, 
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader', 
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'sass-loader', 
                        options: { sourceMap: true }
                    }
                ],
                exclude: /node_modules/,
             },

        ]
    },
    devServer: { 
        static: './dist',
        open: true, 
        port: 3000
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './public/index.html',
        }),
    ],
    devtool: 'source-map'
}