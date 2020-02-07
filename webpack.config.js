const path = require('path')
const webpack = require('webpack')

console.log(path.resolve(__dirname, "../bro/bro1/bro3"))

module.exports = {
    devtool: "inline-source-map",
    entry: './src/index.js',
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        port: 3000,
        publicPath: "/dist/",
        // hot: true
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader',{
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }]
            }
        ]
    },
    resolve: {extensions: ["*", ".js", ".jsx"] }
}