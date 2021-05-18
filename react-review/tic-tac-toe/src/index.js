import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PersonContext from "./contexts/PersonContext";

const persons = [
  { id: 0, name: 'contextAPI 이용하기', age: 22},
  { id: 0, name: 'HO', age: 22},
  { id: 1, name: 'Mark', age: 33}
];

ReactDOM.render(
  <React.StrictMode>
    <PersonContext.Provider value={persons}> 
      <App />
    </PersonContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
