var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '/');

module.exports = {
  mode: 'development',
	entry: [
		path.join(parentDir, '/index.js')
	],
  output: {
    path: parentDir + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },{
        test: /\.scss/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true
  }
};
