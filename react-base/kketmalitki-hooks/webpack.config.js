const path = require('path');//경로 조작

module.exports = {
  name: 'word-realy-setting',
  mode: 'deveopment', // 실서비스: production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'] // 확장자를 찾아주는 기능 entry 부분에 확장자를 입력하지 않아도 된다.
  },
  // entry와 output이 중요
  entry: { // 입력
    app: ['./client'] // , "./WordRelay.jsx"는 client에서 불러와지므로 따로 넣을 필요가 없다.
  },
  output: {  // 출력
    path: path.join(__dirname, 'dist'), // C:\users\...를 만들어주는 기능이다.
    filename: 'app.js'
  }
};

// 여기서 터미널에 webpack을 입력하면 알아서 app.js가 만들어진다.