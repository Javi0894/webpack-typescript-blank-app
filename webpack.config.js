const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Blank App',
            template: 'src/index.html'
        })
    ],
    devServer: {
        static: path.join(__dirname, 'build'),
        compress: true,
        port: 4000,
    },
};