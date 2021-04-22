import logo from './logo.svg';
import './App.css';
import React, { Component, useState, useEffect } from 'react';
import { useInput } from "./useInput"
import { useTabs, content } from "./useTabs";

const App = () => {
  const sayHello = () => console.log('hello');
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber ] = useState(0);
  useEffect(sayHello, [number]);  // list를 넣어주면 리스트에 들어있는 요소의 변화가 있을때를 감지 한다.
  return (
    <div className="App">
      <h1>hello</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  )
}




export default App;