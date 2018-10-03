const webpack = require('webpack');
const convert = require('koa-connect');
const history = require('connect-history-api-fallback');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPaths = require('./paths');

module.exports = {
    entry: {
        scheduler: commonPaths.schedulerEntryPath,
        calendar: commonPaths.calendarEntryPath,
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                exclude: /(node_modules)/,
                options: {
                    emitWarning: process.env.NODE_ENV !== 'production',
                },
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: commonPaths.imagesFolder,
                        },
                    },
                ],
            },
            {
                test: /\.(woff2|ttf|woff|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: commonPaths.fontsFolder,
                        },
                    },
                ],
            },
        ],
    },
    serve: {
        add: app => {
            app.use(convert(history()));
        },
        content: commonPaths.entryPath,
        dev: {
            publicPath: commonPaths.outputPath,
        },
        open: true,
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.css', '.scss'],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     template: commonPaths.indexPath,
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'calendar.html',
        //     template: commonPaths.calendarPath,
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'scheduler.html',
        //     template: commonPaths.prospectPath,
        // }),
    ],
};