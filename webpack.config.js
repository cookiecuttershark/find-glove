var HTMLWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
})
module.exports = {
    entry: __dirname + '/src/index.js', 
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        path:__dirname+ '/dist/',
        filename: "bundle.js",
        publicPath: '/'
    },
    devServer: {
        inline: false,
        contentBase: "./dist",
    },
    plugins: [HTMLWebpackPluginConfig]
}

