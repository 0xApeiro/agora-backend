/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');
const { isLocal } = slsw.lib.webpack;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  target: 'node',
  stats: 'normal',
  entry: slsw.lib.entries,
  externals: [nodeExternals()],
  mode: 'development',
  plugins: [new CopyWebpackPlugin({ patterns: ['./src/**'] })],
  optimization: { concatenateModules: false },
  resolve: { extensions: ['.js', '.ts'] },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    libraryTarget: 'commonjs',
    filename: '[name].js',
    path: path.resolve(__dirname, '.webpack'),
  },
};
