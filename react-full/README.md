## react-front-back-lambda(aws)

## react-front
- NEXT.js 
- pages 디렉토리안에 js파일들은 전부 page로 인식한다. 그래서 따로 import React from 'react'가 필요 없는 이유이기도 하다.(pages 디렉토리안에 있는 경우에만!!)

## redux-saga
- generator
  ```js
  let i = 0;
  const gen = function*() {
    while (true) {
      yield i++;
    }
  }
  const g = gen();
  g.next();
  ```
- saga는 generator의 방식으로 만들어졌다.( 무한으로 사용이 가능하고, 이벤트리스너 처럼 실행되는 함수를 표현 할 수 있다)