const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const 

module.exports = {
  context: path.resolve('./clent'),
  entry: [
    'react-hot-loader/patch',
    './app.jsx'
  ],
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(sass|scss)$/,
        loaders: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
      minify: {
        removeAttributeQuotes: false,
      }
    })
  ],
  devServer: {
    contentBase: './client/',
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 7777,
    stats: {
      colors: true,
      chunks: false,
      warnings: false
    }
  }
};