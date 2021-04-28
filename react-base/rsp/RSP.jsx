import React, { Component } from 'react';
// setINterval를 활용한 가위바위보
// 리액트 라이프 사이클
// 클래스의 경우 -> constructor -> render -> ref ->componentDidMount
// (setState/props 바뀔때) -> shouldComponentUpdate(true) ->render -> componentDidUpdate
// 부모가 자식 컴포넌트를 없앴을 때 -> componentWillUnmount -> 소멸
const rspCoords = {
  바위:'0',
  가위: '-142px',
  보: '-284px'
}

const scores = {
  가위: 1,
  바위: 0,
  보: -1
}

class RSP extends Component {
  state = {
    result : '',
    socre : 0,
    imgCoord : '0',
  }
  interval;
  // 컴포넌트가 DOM에 붙고 나서 특정한 동작을 수행하도록 하는것: componenetDidMount!
  // render후 수행하는 것
  componentDidMount() { //컴포넌트가 첫 렌더링된 후, 여기에 비동기 요청을 많이 한다.
    this.interval = setInterval(() => { // RSP 컴포넌트가 다시 실행될 때 마다 Mount가 계속 일어난다.
      const { imgCoord } = this.state; // 비동기 밖에 변수를 참조한다면 클로져문제가 발생한다.?(클로져??)
      if (imgCoord === rspCoords.바위) {
        this.setState({
          imgCoord: rspCoords.가위
        })
      } else if ( imgCoord === rspCoords.가위){
        this.setState({
          imgCoord: rspCoords.보
        })
      } else if (imgCoord === rspCoords.보) {
        this.setState({
          imgCoord: rspCoords.바위
        })
      }
    },1000);
  }

  componentDidUpdate() { //리렌더링 후 실행

  }

  componentWillUnmount() { // 컴포넌트 didmount에서 했던 작업들을 제거하는 것, 여기에서 비동기 작업 제거!
    console.log('unMount~');
    clearInterval(this.interval);
  }

  onClickBtn = (choice) => {
    console.log(choice);
    if (choice === '보') {
      this.setState({
        score: scores.보
      });
    } else if (choice === '가위') {
      this.setState({
        score: scores.가위
      });
    } else if (choice === '바위') {
      this.setState({
        score: scores.바위
      });
    }
  };
  render() {
    const { result, score, imgCoord} = this.state;
    return (
      <>
      <h1>가위바위보!</h1>
      <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}></div>
      <div>
        <button id='rock' className="btn" onClick={() => this.onClickBtn('바위')}>바위</button>
        <button id='scissor' className="btn" onClick={() => this.onClickBtn('가위')}>가위</button>
        <button id='paper' className="btn" onClick={() => this.onClickBtn('보')}>보</button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
      </>
      )
  }
}

export default RSP;