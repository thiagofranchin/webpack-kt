const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotenvPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js?[contenthash]'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        type: 'asset/resource'
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css?[contenthash]'
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify('1.0.0'),
      PORT: JSON.stringify('8080')
    }),
    new DotenvPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack 5',
      filename: 'index.html',
      inject: 'body',
      favicon: path.resolve(__dirname, './src/images/webpack.png'),
    })
  ]
};
