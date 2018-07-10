const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: ['@babel/polyfill', './source-src/js/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'source'),
    publicPath: './',
    filename: '[name].[chunkhash:6].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vender: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        }
      }
    },
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-runtime'
            ]
          }
        },
      },
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(gif|jpg|png)\??.*$/,
        use: {
          loader: 'url-loader?limit=500&name=img/[name].[ext]',
        }
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        use: {
          loader: "file-loader?name=fonts/[name].[hash:6].[ext]"
        }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['source'], { watch: false }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './source-src/script.ejs',
      filename: '../layout/_partial/script.ejs',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './source-src/style.ejs',
      filename: '../layout/_partial/style.ejs',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash:6].css',
      chunckFilename: '[id].css',
    }),
  ]
};