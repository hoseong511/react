const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
//export
module.exports = {
  name: 'Project',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'], // 확장자 생략하기
    alias: { // 경로 별칭
      '~': path.join(__dirname, 'src'),
      'assets': path.join(__dirname, 'src/assets')
    }
  },
  entry: {
    app: ['./src/main.js']
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          { 
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  debug: true,
                }],
                '@babel/preset-react'
              ],
             plugins: ['react-refresh/babel'] 
            }
          }
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader', //3
          'postcss-loader', //2  // 순서가 중요하다.
          'sass-loader' // 1
        ]
      },
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
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  output: {
    path: path.join(__dirname, 'dist'), // output의 path는 절대경로를 사용!
    filename: 'app.js', // default-> dist
    clean: true
  },
  devServer: {
    host: 'localhost',
    port: 8089,
    hot: true,
  }
} 