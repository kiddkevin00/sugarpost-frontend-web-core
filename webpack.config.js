const packageJson = require('./package.json');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/lib/client/src/app/app.js',
  output: {
    path: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging' ?
      path.resolve(__dirname, './dist/', 'js/') :
      path.resolve(__dirname, './src/lib/client/static/', 'app/'),
    filename: `bundle-${packageJson.version}.js`,
    publicPath: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging' ?
      '/js/' : '/app/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  devtool: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging' ?
    'cheap-module-source-map' : 'eval',
  stats: {
    color: true,
    reason: true,
    chunks: true,
  },
  module: {
    rules: [
      //{
      //  test: /\.(js|jsx)$/,
      //  enforce: 'pre',
      //  exclude: /node_modules/,
      //  loader: 'eslint-loader',
      //},
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
};
