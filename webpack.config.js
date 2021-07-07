const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devTool: "inline-source-map",
    entry: {
        main: "./src/index.js"
    },
    devServer: {
        contentBase: "./dist"
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    }
}