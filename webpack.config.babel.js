const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: `${__dirname}/dist`,
        publicPath: '/',
        filename: 'app.js'
    },
    devServer: {
        contentBase: `${__dirname}/src`
    },
    module: {
        loaders: [{
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|)$/,
            loader: 'file'
        }, {
            test: /\.html$/,
            loader: 'raw'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.js$/,
            loader: 'ng-annotate'
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${__dirname}/public/index.html`,
            inject: 'body'
        })
    ]
};
