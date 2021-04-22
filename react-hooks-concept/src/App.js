import logo from './logo.svg';
import './App.css';
import React, { Component, useState, useEffect, useRef } from 'react';
import { useInput } from "./useInput"
import { useTabs, content } from "./useTabs";
import ReactDom from "react-dom"

const useTitle = initialTitle => {
  const [title, setTitle ] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title])
  return setTitle;
}

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if(element.current){
      element.current.addEventListener("click", onClick)
    }
    return () => {
      if(element.current){
        element.current.removeEventListener("click", onClick)
      } // 
    };
  }, []) // 위에 코드, []이 같이 unmount해주는 역할!
  if (typeof onClick !== 'function'){
    return;
  }
  return element;
}
/* 
unmount 하는 법을 익혀보자.
*/


const App = () => {
  const useref1 = useRef(); // useref1이 마운트가 되기 전에 실행을 해서 처음꺼는 undefined! 하지만 곧 마운트되고 나서 내용이 업데이트되는것을 확인 비동기를 확인?
  useEffect(() => {   // 이러한 문제는 mount update unmount 기능을 갖고 있는 useEffet로 해결
    setTimeout(() => {
      console.log(useref1); 
      useref1.current?.focus() // optional Changing-> ? 
    } , 2000)},[]);
   
  const el = document.querySelector('h1');
  const sayHello = () => console.log(el); // 기존: console.log(el.textContent); 수정: .log(el); 실행을 하니 먼저 마운트된 컴포넌트가 해제되지 않아서 두가지가 동시에 실행되는 것을 확인할 수 있다.
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>hello</h1>
      <input ref={ useref1 } placeholder="hihi" />
  
    </div>
  )
}




export default App;