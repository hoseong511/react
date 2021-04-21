import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import { useInput } from "./useInput"
import { useTabs } from "./useTabs";

const App = () => {
  const contentMap = content.map((section,index) => (
    <button key={index} onClick={() => changeItem(index)}>{section.tab}</button>
    ));
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      <h1>hello</h1>
      {contentMap}
      <br></br>      
      { currentItem.content }
    </div>
  )
}

export default App;
