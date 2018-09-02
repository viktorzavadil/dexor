const
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.js',
        vendor: [
            'angular',
            'angular-animate',
            'angular-aria',
            'angular-local-storage',
            'angular-material',
            'angular-material-icons',
            'angular-messages',
            'angular-resource',
            'angular-sanitize',
            'angular-ui-router',
            'rx'
        ]
    },
    output: {
        path: `${__dirname}/dist`,
        publicPath: '/',
        filename: '[name].[hash].js'
    },
    devServer: {
        port: 8888,
        contentBase: `${__dirname}/src`
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|)$/,
                use: 'file-loader'
            }, {
                test: /\.html$/,
                use: 'raw-loader',
                include: `${__dirname}/src`
            }, {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                },
                exclude: /node_modules/
            }, {
                test: /\.js$/,
                use: 'ng-annotate-loader'
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.less$/,
                include: `${__dirname}/src`,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            template: `${__dirname}/public/index.html`,
            inject: 'body'
        }),
        new CopyWebpackPlugin([{from: `${__dirname}/public/static`, to: `static`}])
    ]
};
