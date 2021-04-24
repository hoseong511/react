const React = require('react');
const ReactDom = require('react-dom');
const WordRelay = require('./WordRelay'); // import 하기~
// react전용 파일 .jsx
ReactDOM.render(<WordRelay />, document.querySelector('#root'));