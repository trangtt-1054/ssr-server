const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  mode: 'development',
  target: 'node', //tell webpack we're building a bundle for nodeJS, rather than for the browser
  entry: './src/index.js', //tell webpack the root file of our server application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [webpackNodeExternals()] //not bundle any libraries into output bundle on server if that library exists inside the node modules folder.
};

module.exports = merge(baseConfig, config);
