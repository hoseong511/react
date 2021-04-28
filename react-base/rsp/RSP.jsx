import React, { Component } from 'react';
// setINterval를 활용한 가위바위보
// 리액트 라이프 사이클
// 클래스의 경우 -> constructor -> render -> ref ->componentDidMount
// (setState/props 바뀔때) -> shouldComponentUpdate(true) ->render -> componentDidUpdate
// 부모가 자식 컴포넌트를 없앴을 때 -> componentWillUnmount -> 소멸
class RSP extends Component {
  state = {
    result : '',
    socre : 0,
    imgCoord : 0,
  }
  // 컴포넌트가 DOM에 붙고 나서 특정한 동작을 수행하도록 하는것: componenetDidMount!
  // render후 수행하는 것
  componentDidMount() { //컴포넌트가 첫 렌더링된 후

  }

  componentDidUpdate() { //리렌더링 후 실행

  }

  componentWillUnmount() { // 컴포넌트 didmount에서 했던 작업들을 제거하는 것

  }
  render() {
    const { result, score, imgCoord} = this.state;
    return (
      <>
      <h1>가위바위보!</h1>
      <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}></div>
      <div>
        <button id='rock' className="btn" onClick={() => onClickBtn('바위')}>바위</button>
        <button id='scissor' className="btn" onClick={() => onClickBtn('가위')}>가위</button>
        <button id='paper' className="btn" onClick={() => onClickBtn('보')}>보</button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
      </>
      )
  }
}

export default RSP;