import logo from './logo.svg';
import './App.css';
import React, { Component, useState, useEffect, useRef, useCallback } from 'react';
import { useInput } from "./useInput"
import { useTabs, content } from "./useTabs";
import usePreventLeave from './hooks/usePreventLeave';
import useConfirm from './hooks/useConfirm';
import useClick from './hooks/useClick';
import useBeforeLeave from './hooks/useBeforeLeave';

const useTitle = initialTitle => {
  const [title, setTitle ] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  };
  useEffect( updateTitle , [title])
  return setTitle;
}

/* 
unmount 하는 법을 익혀보자.
*/


const App = () => {
  // 0
  const onClickTitle = (e) => { // 이건 그냥 vanila js 같은데?
    const element = document.querySelector('.titleInput');
    console.log(element.value)
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = element.value
  }
  // 1. 타이틀 바꾸기
  const [changeScreen, setChangeScreen] = useState(false)
  const onChangetitle = useCallback(() => {
    setChangeScreen((prev) => !prev);
  }, []);
  const hi = useTitle('loading...');
  // setTimeout(() => {
  //   // hi('home');
  //   // setChangeScreen((prev) => !prev);
  //   // console.log('?');
  // }, 2000) // 2초후에 변경 ==> 렌더링 될때마다 계속실행된다.
  

  const useref1 = useRef(); // useref1이 마운트가 되기 전에 실행을 해서 처음꺼는 undefined! 하지만 곧 마운트되고 나서 내용이 업데이트되는것을 확인 비동기를 확인?
  useEffect(() => {   // 이러한 문제는 mount update unmount 기능을 갖고 있는 useEffet로 해결
    setTimeout(() => {
      console.log(useref1); 
      useref1.current?.focus() // optional Changing-> ? 
    } , 2000)},[]);
   
  const el = document.querySelector('h1');
  const sayHello = () => console.log(el); // 기존: console.log(el.textContent); 수정: .log(el); 실행을 하니 먼저 마운트된 컴포넌트가 해제되지 않아서 두가지가 동시에 실행되는 것을 확인할 수 있다.
  const htitle = useClick(sayHello);
  // 여기에서 리액트 lifecycle에 대해서 다시 생각해볼 수 있다. 1. render 2. update  즉 컴포넌트가 업데이트가 되고 나서 다시 render가 되므로 el은 비워져 있는 것, 그래서 useRef를 사용하는구나

  const { enablePrevent, disablePrevent } = usePreventLeave();
  const deleteWorld = () => console.log("delete the world");
  const abort = () => console.log('aborted')
  const confirmDelete = useConfirm('Are you sure?',deleteWorld, abort);

  const leave = () => alert('dont leave~~');
  useBeforeLeave(leave);
  return (
    <div className="App">
      change screen!
      <br />
      <button onClick={onChangetitle} >화면 바꾸기</button>
      { !changeScreen 
          ? <>
              <br />
              <br />
              click hello!
              <h1 ref={htitle}>hello</h1>
              <br />
              confirm input focus
              <br />
              <input ref={ useref1 } placeholder="hihi" />
              <br />
              <br />
              Test usePreventLeave
              <br />
              <button onClick={enablePrevent}>protect</button>
              <button onClick={disablePrevent}>unprotect</button>
              <br />
              <br />
              Test confirm message!
              <br />
              <button onClick={confirmDelete}>Delete the page</button>
            </>
          : <> 
              <br/>
              hello!
            </>
      }
      
    </div>
  )
}

export default App;