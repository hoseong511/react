const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

//export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점
  entry: './js/main.js',
  output: {
    // path: path.resolve(__dirname, 'dist'), // output의 path는 절대경로를 사용!
    // filename: 'main.js', // default-> dist
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader', //3
          'postcss-loader', //2  // 순서가 중요하다.
          'sass-loader' // 1
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static'}
      ]
    })
  ],
  devServer: {
    host: 'localhost'
  }
} 