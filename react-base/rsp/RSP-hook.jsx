import React, { useState, useRef, useEffect } from 'react';
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
const computerChoice = (imgCoord) =>{
  return Object.entries(rspCoords).find(function(v){
    return v[1] === imgCoord;
  })[0];
};
/**                          result, imgCoord, score
 componentDidMount 
 componenetDidUpdate
 componenetWillUnmount

 componentDidMount() {
   this.setState({
     imgCoord: 3,
     score: 1,
     result: 2,
   })
 }
 useEffect(() => {
   setImgCoord();
   setScore();
 }, [imgCoord, score]);
 useEffect(() => {
   setResult();
 }, [result])
*/

const RSP = () => {
  const [ result, setResult ] = useState('');
  const [ score, setScore ] = useState(0);
  const [ imgCoord, setImgCoord ] = useState(rspCoords.바위);
  const interval = useRef(null);

  // 값이 바뀔때 마다 useEffect는 다시 실행한다.
  useEffect( () => { // componentDidMount랑 componentDidUpdate 역할( 1:1 대응은 아님)
    console.log('순서1');
    interval.current = setInterval(changeHand,1000);
    return() => { // componentWillUnmount 역할
      console.log('순서2');
      clearInterval(interval.current);
    }
  }, [imgCoord]); // useEffect를 실행하고싶은 인수를 넣어주자
  // 1. 처음 실행 시 역할이 componentDidMount
  // 2. 실행 후 받은 2번째 인수에 따라서 componentDidUpdate

  // useEffect를 여러개 사용하여 원하는 state 값에 따른 변화를 여러개 줄 수 있다.
  // 이와 같은 효과를 class에서는 조건문으로 분기 처리한다.

  const changeHand = () => {     
    if (imgCoord === rspCoords.바위) {
      setImgCoord(rspCoords.가위)
    } else if ( imgCoord === rspCoords.가위){
      setImgCoord(rspCoords.보)
    } else if (imgCoord === rspCoords.보) {
      setImgCoord(rspCoords.바위)
    }
  }
  const onClickBtn = (choice) => (e) => { // 자주쓰는 패턴 curried function        
    clearInterval(interval.current);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      setResult('비겼습니다.!')
    } else if ([-1,2].includes(diff)) {
      setResult('이겼습니다.!')
      setScore((prevScore) => prevScore + 1)      
    } else {
      setResult('졌습니다.!')
      setScore((prevScore) => prevScore - 1)            
    }
    setTimeout(()=> {
      interval.current = setInterval(changeHand, 1000);
    }, 2000);
  };


  return (
    <>
      <h1>가위바위보!</h1>
      <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}></div>
      <div>
        <button id='rock' className="btn" onClick={onClickBtn('바위')}>바위</button>
        <button id='scissor' className="btn" onClick={onClickBtn('가위')}>가위</button>
        <button id='paper' className="btn" onClick={onClickBtn('보')}>보</button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  )
}

export default RSP;