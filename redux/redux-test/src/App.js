import logo from './logo.svg';
import './App.css';
import {Row, Col} from 'antd';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';
import UserListContainer from './containers/UserListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Row gutter={100}>
          <Col >
            <UserListContainer />
          </Col>
          <Col >
            <TodoListContainer />
          </Col>
          <Col >
            <TodoFormContainer />
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default App;
