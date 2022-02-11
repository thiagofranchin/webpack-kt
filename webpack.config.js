const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js?[contenthash]'
  },
  mode: 'development',
  // Uncomment the code below to minimize JavaScript
  /*
    optimization: {
     minimize: true,
     minimizer: [new TerserPlugin()]
    },
  */
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
        test: /\.(png|jpg|jpeg)$/,
        use: [
          'file-loader'
        ]
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
    new HtmlWebpackPlugin()
  ]
};
