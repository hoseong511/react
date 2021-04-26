// 컴포넌트 분리하기~
const React = require('react');
const { useState, useRef } = React;
const Api_word = require('./WordConfig')

const WordRelay = () => {
  const [word, setWord] = useState('호호');
  const [value, setValue ] = useState('');
  const [result, setResult ] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => { // 클래스 메소드는 무조건 화살표함수
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('')        
    } else {
      setResult('땡');
      setValue('');
    }
    inputRef.current.focus();
  }

  const onChangeInput = (e) => {
    setValue(e.target.value)
  }
  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="wordInput">글자를 입력하세요.</label>

        <input className="hoho" ref={inputRef} value={value} onChange={onChangeInput} />

        <button>입력</button>
      </form>
      <Api_word value={value}/>
      <div>{result}</div>
    </>
  )
}
module.exports = WordRelay; // export node의 모듈시스템