const path = require("path");

// console.log(`webpack_demo test...\n${__dirname}`);

module.exports = {
    entry: {
        app: "./src/expensify/expensify.js",
    },
    mode: "none",
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true, // Force react-router to return index.html for all 404 (not found) requests
        hot: true,
        writeToDisk: true


        // contentBase: path.join(__dirname, "public"),
        // clientLogLevel: "trace",
        // hot: false,
        // hotOnly: true,
        // index: "index.html",
        // lazy: false,
        // liveReload: true,
        // writeToDisk: true
    },
    output: {
        path: "C:\\_DEV\\_projects\\vsc\\complete_react_expensify\\public\\scripts\\",
        filename: "bundle.js",
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
};
