const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

console.log(__dirname)

module.exports = {
    optimization: {
        splitChunks: {
            chunks: "all",
            name: 'vendors'
        }
    },
    entry: {
        vendors: [
            "react",
            "react-dom",
            "react-router",
            "react-router-dom",
            "redux",
            "react-redux",
            "redux-devtools",
            "redux-thunk"
        ],
        index: path.resolve(__dirname, './src/index.tsx')
    },
    output: {
        filename: '[name].js',
        path: __dirname + "/dist",
        publicPath: '/'
    },

    watch: true,

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            {test: /\.css$/,use: ['style-loader', 'css-loader']}
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: ["vendors", 'index']
        })],

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 9000
    }
};