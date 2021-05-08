import React, { Component, useState, useRef } from 'react';

const ResponseCheck = () => {
  const [state, setState ] = useState('waiting');
  const [message, setMessage ] = useState('클릭해서 시작하세요');
  const [result, setResult ] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onClickScreen = () => {
    if (state == 'waiting') {
      setState('ready');
      setMessage('초록색이 되면 클릭하세요.')
      timeout.current = setTimeout(() => {
        setState('now');
        setMessage('지금 클릭')        
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === 'ready') { // 성급하게 클릭
      setState('waiting');
      setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요!')
      clearTimeout(timeout.current);
    } else if (state === 'now') {
        endTime.current = new Date();
        setState('waiting');
        setMessage('클릭해서 시작하세요!');
        setResult((prevResult) => {
          return [...prevResult, endTime.current - startTime.current]
        })
      }
  };
  const onReset = () => {
    setResult([]);
  }
  const renderAverage = () => {
    return result.length === 0 ? null : 
          <>
          <div>
            평균 시간: {result.reduce((a,c) => a + c) / result.length}ms
          </div>
          <button onClick={onReset}>리셋</button>
          </>;
    }
  return (
    <>
      <div id='screen' className={state} onClick={onClickScreen}>
        {message}
      </div>
      {(() => {
        if (result.length === 0) {
          return null;
        } else {
          return <>
            <div>
              평균 시간: {result.reduce((a,c) => a + c) / result.length}ms
            </div>
            <button onClick={onReset}>리셋</button>
          </>
          }
        })() // 즉시 실행함수 이용 -> for문도 마찬가지로 이용함
      } 
      {/* {renderAverage()} */}
    </>
  )
  return [
    <div key='사과'>사과</div>,
    <div key='바나나'>바나나</div>,
    <div key='배'>배</div>,
    <div key='감'>감</div>,
    <div key='귤'>귤</div>
  ] // 이런식으로 배열을 return 하는 경우도 있다.
}


export default ResponseCheck;