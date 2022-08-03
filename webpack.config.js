const path = require('path'); 
// const HtmlWebpackPlugin = require('html-webpack-plugin');
  

module.exports = {
    entry: './src/index.js',
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'Output Management',
    //     })
    // ],
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            ////loading css 
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            ////loading images
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            ////loading fonts 
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            ////loading data 
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            }, 
        ],
    },
}; 