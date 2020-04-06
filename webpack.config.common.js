const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
//    filename: 'main.js',
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
  module: {
    rules: [
/*      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },  */
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /dist/], // expect this
        use: {
          loader: 'babel-loader',
        },
      },
    ]
  }
}