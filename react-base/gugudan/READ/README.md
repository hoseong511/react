### 구구단
```브라우저가 읽을 수 있는 파일은 HTML, CSS, JS 이다. 그래서 리액트던 뷰던 작업한 내용을 변환 시켜 줄 바벨(jsx to ES5)이 필요하고 이를 동작 시킬 번들러 웹팩을 이용해서 브라우저 읽을 수 있는 형태(HTML, CSS, JS)로 만들어 주는 구조```   
- no create-react-app  
 cra를 이용하면 프론트 프레임워크의 성향이 강한 것 같다. cra를 사용하지 않는 강의를 통해 바벨과 웹팩의 작동원리에 대해서 조금 더 이해할 수 있게 되었던 것 같다.
- package.json
```json
{
  "devDependencies": {
    "@babel/core": "^7.13.16",
    "@babel/plugin-proposal-class-properties": "^7.13.0",
    "@babel/preset-env": "^7.13.15",
    "@babel/preset-react": "^7.13.13",
    "babel-loader": "^8.2.2",
    "webpack": "^5.35.1",
    "webpack-cli": "^4.6.0"
  }
} 
```
- webpack.config.js
```js
const path = require('path');
const webpack  = require('webpack');

module.exports = {
  name: 'gugudan',
  mode: 'development', // 실서비스: production
  devtool: 'eval', // 실서비스: hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx'] // 확장자를 찾아주는 기능 entry 부분에 확장자를 입력하지 않아도 된다.
  },
  // entry와 output이 중요
  entry: { // 입력
    app: ['./client'] // , "./WordRelay.jsx"는 client에서 불러와지므로 따로 넣을 필요가 없다.
  },

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            // useBuiltIns: "entry",
            targets: { // 국내에서 점유율이 5% 이상인 브라우저 (browserslist)
              browsers: [
                '> 0.25% in KR'    
              ] 
            }, 
            debug: true,
          }],
           '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties']
      },
    }]
  }, 
  
  plugins: [ 
    new webpack.LoaderOptionsPlugin({
       debug: true 
      }),
  ],
  output: {  
    path: path.join(__dirname, 'dist'), // C:\users\...를 만들어주는 기능이다.
    filename: 'app.js'
  }
};
```