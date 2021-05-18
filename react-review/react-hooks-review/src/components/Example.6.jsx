import { useReducer } from 'react';


/**
 * reduer => state를 변경하는 로직이 담겨 있는 함수
 * dispatch => action 객체를 넣어서 실행
 */
const reducer = ( state, action ) => {

  if (action.type === 'PLUS') {
    return {
      count: state.count + 1,
    };
  }
  return state;
}
export default function Example6() {
  const [ state, dispatch ] = useReducer(reducer, { count: 0 })

  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={click}>Click!!</button>
    </div>
  )
  function click() {
    dispatch({ type: 'PLUS'})
  }
}