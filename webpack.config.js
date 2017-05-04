const packageJson = require('./package.json');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/lib/client/src/app/app.js',
  output: {
    path: path.resolve(__dirname, './src/lib/client/static/', 'app/'),
    filename: `bundle-${packageJson.version}.js`,
    publicPath: '/app/',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  devtool: 'eval',
  stats: {
    color: true,
    reason: true,
    chunks: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
