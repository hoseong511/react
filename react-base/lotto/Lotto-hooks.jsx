import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Ball from './Ball';

function getWinNumbers () {
  console.log('getWinNumbers');
  const candidate = Array(45).fill().map( (v, i) => i +1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1 )[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort( (p, c) => p -c );
  return [...winNumbers, bonusNumber ];
}
// 웬만하면 hooks를 사용하는 부분에는 if, for를 사용하지 말아야 한다.
// useState도 마찬가지로 useEffect, ... 등 안에 사용 x 
const Lotto = () => {
  console.log('lotto'); // 컴포넌트 안 함수의 반환값을 기억해 여러번 실행되는 것을 막아준다.
  const lottoNumbers = useMemo(() => getWinNumbers(), [winBalls]); 
  const [ winBalls, setWinBalls ] = useState([]);
  const [ winNumbers, setWinNumbers ] = useState(lottoNumbers);
  const [ bonus, setBounus ] = useState(null);
  const [ redo, setRedo ] = useState(false);
  const timeouts = useRef([]);

  // useEffect(() => {
  //   // ajax
  // }, []); // componentDidMount만 하는 방법

  // const mounted = useRef(false);
  // useEffect(() => {
  //   if(!mounted.current) {
  //     mounted.current = true;
  //   } else {
  //     // ajax
  //   }
  // }, [바뀌는값]); // componentDidUpdate 만 사용하는 방법

  const runTimeouts = () => {
    console.log('runtimeouts');
    console.log("runTime",winNumbers);
    for (let i =0; i < winNumbers.length -1; i++) {
      timeouts.current[i] = setTimeout( () => {
        setWinBalls((prevWinBalls) => [...prevWinBalls, winNumbers[i]]);
        }, (i+1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBounus(winNumbers[6]);
      setRedo(true);
    }, 7000);
  }

  const onClickRedo = useCallback(() => { // Redo를 누를때 마다 작동되도록 조건문을 걸어 실행한다.
    console.log('onClickRedo');
    console.log("onClick",winNumbers);
    setWinNumbers(getWinNumbers()); // 상단에 useMemo가 선언됨 과 동시 다시 getNumbers 함수 호출되어도 똑같이 리턴값을 저장한다.
    setWinBalls([]);
    setBounus(null);
    setRedo(false);      
    timeouts.current = []; // 요소에 넣어주는 것은 바뀌는 것이 아니고 이와 같이 배열을 직접 바꾸는 경우여만 한다.
  }, [winNumbers]); // useCallback 은 함수를 기억한다. 이렇게 input을 넣어주어야 함수가 초기화된다.

  useEffect(() => {
    console.log('useEffect1');
    runTimeouts();
    return() => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    }
  }, [timeouts.current]) // 만약 input이 빈배열이면 componentDidMount랑 같다.
// 배열에 요소가 있으면 componentDidMoun랑 componentDidUpdate 둘 다 수행한다.

  useEffect(() => { // useEffect를 여러번 사용해도 된다.
    console.log('로또숫자를 생성합니다.');
  }, [winNumbers]);
  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => <Ball key={v} number={v} />)}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} onClick={onClickRedo}/>} {/**자식 컴포넌트에 함수를 넘길 때 꼭 useCallBack을 사용해야 한다. 
       * useCallBack을 사용하지 않는다면 매번 자식 컴포넌트를 이를 새로운 함수로 받아들여 리렌더링을 한다.
      */}
      {redo && <button onClick={onClickRedo}>한 번 더!</button>}
    </>
  )
}
  // componentDidUpdate(prevProps, prevState) {
  //   console.log('didUpdate');
  //   if (this.state.winBalls.length === 0) {
  //     this.runTimeouts();
  //   }
  // }
export default Lotto;