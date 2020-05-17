const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  mode: 'development',
  entry: './src/client/client.js', //tell webpack the root file of our server application, client.js chính là index.js của client-side, nhưng mà để cho đỡ nhầm thì cứ để là tên file là client.js
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), //vì cần public cho browser nên đặt tên folder là public 
  }
};

module.exports = merge(baseConfig, config);
