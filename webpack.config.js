const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: process.env.WEBPACK_MODE || 'development',
  entry: './src/index.js',
  resolve: {
    alias: {
    }
  },
  devServer: {
    contentBase: './docs',
    hot: true,
    port: 3000
  },
  module: {
    rules: [{
      test: /\.scss$/,
      include: path.resolve(__dirname, "src"),
      use: [
        "style-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS, using Node Sass by default
      ]
    }, {
      test: /\.jsx?$/,
      include: path.resolve(__dirname, "src"),
      use: {
        loader: "babel-loader"
      }
    }]
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/tpl/index.html'
    }),
    (process.env.WEBPACK_MODE != 'development' ? new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        '!favicon.ico'
      ]
    }) : ()=>{}),
    new webpack.HotModuleReplacementPlugin()
  ]
};