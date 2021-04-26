import React, { useState, useRef } from 'react'; //ES2015
import Try from './Try-hooks'

function getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidate = [1,2,3,4,5,6,7,8,9]
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const choosen = candidate.splice(Math.floor(Math.random() * (9-i)), 1)[0];
    array.push(choosen)
  }
  console.log(array); // hooks는 state가 바뀔때마다 전체 함수가 실행되는 것을 알수 있다.
  return array;
} // this를 안쓰는 경우 function을 밖으로 빼놓는다

const NumberBaseball = () => {
  const [ value, setValue ] = useState('');
  const [ result, setResult ] = useState('');
  const [ answer, setAnswer ] = useState(getNumbers());
  const [ tries, setTries ] = useState([]);
  const refInput = useRef(null);

  const onSubmitForm = (e) => { 
    e.preventDefault();    
    if (value === answer.join('')){
      setResult('홈런!');
      setTries((prevTries) => {
        return [...prevTries, { try: value, result: '홈런!'}]
      })
      setValue('');
      setAnswer(getNumbers());
      setTries([]);      
    } else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`)        
        alert('게임을 다시 시작합니다!');
        setValue('');
        setAnswer(getNumbers());
        setTries([]);        
      } else{
        for (let i = 0; i < 4; i += 1){
          if (answerArray[i] === answer[i]){
            strike += 1;
          } else if ( answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries((prevTries) => [...prevTries, { try: value, result: `${strike} 스트라이트, ${ball} 볼입니다.`}]);
        setValue('');        
      }  
    }
    refInput.current.focus();
    // console.log(value);
  }

  const onChangeInput = (e) => {
    setValue(e.target.value);    
  }

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit = {onSubmitForm}>
        <input ref={refInput} maxLength={4} value={value} onChange={onChangeInput} />
        <button>입력!</button>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {
          tries.map((v, i) => {
            return (
              <Try key={`${i+1}차 시도: `} tryInfo={v}/> // react에서는 props라고 불린다.
              );
            })    
        }      
      </ul>
    </>
  );
}

export const hello = 'hello'; // import { hello }
export default NumberBaseball; // import NumberBaseball;
