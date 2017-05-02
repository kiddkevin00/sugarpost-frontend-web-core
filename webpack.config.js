module.exports = {
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  context: __dirname,
  entry: './src/lib/client/src/app/app.js',
  devtool: 'eval',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  stats: {
    color: true,
    reason: true,
    chunks: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
