import path from 'path';
import webpack from 'webpack'

export default {
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname, 'src/js/index')
    ],
    target: 'web',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    plugins: [

    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
}
