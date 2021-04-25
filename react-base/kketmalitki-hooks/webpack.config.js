const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'word-relay-dev',
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: './client',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {browsers: ['> 0.25% in KR' ]},         
              debug: true,                           
          }],
          '@babel/preset-react',
        ],
        plugins: ['@babel/plugin-proposal-class-properties'], //'react-refresh/babel', 이것도 제거
      },
      exclude: path.join(__dirname, 'node_modules'),
    }],
  },
  plugins: [
    // new ReactRefreshWebpackPlugin(), // 이것도 제거
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist',
  }
  // devServer: {   
  //   // contentBase: './',
  //   publicPath: '/dist',
  //   hot: true    빌드시에는 제거해주자
  // } 빌드시에는 hotreloading 하기 위해 넣어주었던 코드를 전부 제거해야한다.
};