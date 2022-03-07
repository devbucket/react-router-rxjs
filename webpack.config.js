const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  target: ['web'],
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    assetModuleFilename: 'assets/[name].[ext]',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css'],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 80,
    host: '0.0.0.0',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    liveReload: false,
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'build', 'index.html'),
      template: path.resolve(__dirname, 'public', 'index.html'),
      scriptLoading: 'blocking',
      isBrowser: true,
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff|woff2|gif|jpg|jpeg|bmp|png)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'css',
              minify: false,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx',
          target: 'es2015',
        },
      },
    ],
  },
  optimization: {
    minimize: process.env.NODE_ENV === 'production',
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015',
        css: true,
      }),
    ],
  },
};
