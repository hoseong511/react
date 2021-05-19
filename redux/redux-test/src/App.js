import logo from './logo.svg';
import './App.css';
import { useContext, useEffect, useState } from 'react';
import { addTodo, showComplete } from './redux/actions';
import useReduxDispatch from './hooks/useReduxDispatch';
import TodoList from './components/TodoList';
import {Row, Col} from 'antd';
import TodoForm from './components/TodoForm';

function App() {
  const dispatch = useReduxDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Row >
          <Col >
            <TodoList />
          </Col>
          <Col >
            <TodoForm />
          </Col>
        </Row>
      </header>
    </div>
  );
  
  function click() {
    dispatch(addTodo('할일'));
    dispatch(showComplete());
  }
}

export default App;
