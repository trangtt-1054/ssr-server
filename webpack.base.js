module.exports = {
  //run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/, //do not run babel here
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }], //run all the transform rules needed to meet requirements of 2 latest versions of all popular browsers
          ],
        },
      },
    ],
  },
}