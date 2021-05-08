import React, { memo } from 'react';
// pureComponent 의 역할을 함
const Ball = memo(({ number }) => { // 컴포넌트를 다른 컴포넌트로 감싸는 것을 하이오더 컴포넌트
  let background;
    if( number <= 10) {
      background = 'red';
    } else if ( number <= 20) {
      background = 'orange';
    } else if ( number <= 30) {
      background = 'royalblue';
    } else if ( number <= 40) {
      background = 'yellow';
    } else {
      background = 'green';
    }
    return (      
      <div key={number+Math.random()} className="ball" style={{ background }}>{number}</div>
    );
});


export default Ball;