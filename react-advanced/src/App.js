import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import Modal from './components/Modal';
import MyInput from './components/MyInput';

function App() {
  const myInputRef = useRef();
  const click = () => {
    console.log(myInputRef.current.value);
  }
  return (
    <div>
      <MyInput ref={myInputRef} />
      <button onClick={click} >click</button>
    </div>
  )

}

export default App;
