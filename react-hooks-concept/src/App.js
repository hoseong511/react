import logo from './logo.svg';
import './App.css';
import React, { Component, useState, useEffect } from 'react';
import { useInput } from "./useInput"
import { useTabs, content } from "./useTabs";

const useTitle = initialTitle => {
  const [title, setTitle ] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title])
  return setTitle;
}

const App = () => {
  const titleUpdater = useTitle("roading..."); // 어떤 조건이 만족된 후에 내가 원하는 title을 불러오는 방법으로 활용하면 되겠다.
  setTimeout(() => titleUpdater("React Home"), 5000) // 이거는 setTimeout을 줘서 5초후에 원하는 title로 바꿔주기
  return (
    <div className="App">
      <h1>hello</h1>
  
    </div>
  )
}




export default App;