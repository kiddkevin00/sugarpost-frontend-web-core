const packageJson = require('./package.json');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/lib/client/src/app/app.js',
  output: {
    path: process.env.RUNTIME_ENV === 'heroku' ?
      path.resolve(__dirname, './dist/', 'js/') :
      path.resolve(__dirname, './src/lib/client/static/', 'app/'),
    filename: `bundle-${packageJson.version}.js`,
    publicPath: process.env.RUNTIME_ENV === 'heroku' ? '/js/' : '/app/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  devtool: process.env.RUNTIME_ENV === 'heroku' ? 'cheap-module-source-map' : 'eval',
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
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
