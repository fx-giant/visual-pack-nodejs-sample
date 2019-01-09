const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    "merchantLocationWidget": './src/app.js',
    "program": './src/program.js'
  },
  output: {
    library: '[name]',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    open: true
  },
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
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }      
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new MiniCssExtractPlugin({
      filename: 'merchantLocationWidget.[contenthash].css'
    }),
    new HtmlWebpackPlugin({      
      template: './src/index.html',
      filename: 'index.html'
    }),
  ],
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all'
    }
  }
};
