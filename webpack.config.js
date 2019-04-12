const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    mode: "production",

    entry: {
        index: "./src/index.js"
    },

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "lib"),
        libraryTarget: "commonjs2"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    },

    plugins: [new CleanWebpackPlugin()]
};
