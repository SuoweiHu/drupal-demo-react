const path = require('path');
const isDevMode = process.env.NODE_ENV !== 'production';
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

module.exports = {
  entry: {
    tile: ["./js/src/tile/index.jsx"]
  },
  devtool: (isDevMode) ? 'source-map' : false,
  mode: (isDevMode) ? 'development' : 'production',
  output: {
    path: isDevMode ? path.resolve(__dirname, "js/dist_dev") : path.resolve(__dirname, "js/dist"),
    filename: '[name].min.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'js/src'),
      }
    ],
  },
  plugins: [
    new WebpackShellPluginNext({
      onBuildEnd: {
        scripts: ['cd ../../.. && vendor/bin/drush cr;'],
        blocking: false,
        parallel: true
      }
    })
  ],
};