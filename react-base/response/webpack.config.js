const path = require('path');//경로 조작
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
                '> 0.25% in KR'        // 작동이 안되는데??  --> package.json에 browserslist에 입력해주자
              ] //이거는 작동되게 할 브라우저 선택!
            }, // browsersList를 검색해보기!
            debug: true,
          }],
           '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties']
      },
    }]
  }, // webpack 공식문서를 확인해보기
  
  plugins: [ // 일부러 플러그인을 빼보면서 에러메시지를 확인해보기
    new webpack.LoaderOptionsPlugin({
       debug: true 
      }),
  ],
  output: {  // 출력
    path: path.join(__dirname, 'dist'), // C:\users\...를 만들어주는 기능이다.
    filename: 'app.js'
  }
};
// entry -> module -> plugins -> output

// 여기서 터미널에 webpack을 입력하면 알아서 app.js가 만들어진다.