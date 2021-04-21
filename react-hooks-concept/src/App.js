import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import { useInput } from "./useInput"

const App = () => {
  const maxLen = value => value.length <= 10;
  const char = value => !value.includes("@");
  const name = useInput("Mr.", char);
  return (
    <div className="App">
      <h1>hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  )
}

export default App;
