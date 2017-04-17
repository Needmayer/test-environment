//import webpack from 'webpack';
import path from 'path';

export default {
    devtool: 'eval-source-map',
    entry: [
        path.resolve(__dirname, 'src/index.js')
    ],
    target: 'web',
    output:{
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [],
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders:['style-loader', 'css-loader']
            }
        ]
    }
}