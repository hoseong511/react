import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';

// class App extends Component {
//   state = {
//     count: 0 
//   };
//   modifiy = n => {
//     this.setState({
//       count: n
//     });
//   };
//   render() {
//     const { count } = this.state;
//     return (
//       <>
//         <div>{count}</div>
//         <button onClick={() => this.modifiy(count+1)}>Increment</button>
//       </>
//     )
//   }
// }
const App = () => {
  const [count, setCount] = useState(0); // useState가 array를 리턴한다.
  const [email, setEmail] = useState("");
  const updateEmail = e => {
    const {
      target: { value }
    } = e;
    setEmail(value); 
  }
  return (
    <>
      {count}
      <button onClick={() => setCount(count+1)}>Increment</button>
      <button onClick={() => setCount(count-1)}>Decrement</button>
      <input placeholder="Email" value={email} onChange={updateEmail} /> 
    </>
  )
}

export default App;
