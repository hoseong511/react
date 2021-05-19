import { ADD_TODO, COMPLETE_TODO } from "../actions";

const todosInitialState = []; //[{text: '코딩', done: false}, {}]

export default function todos(prevState=todosInitialState, action) {
  if (action.type === ADD_TODO) {
    return [...prevState, { text: action.text, done: false } ]
    
  }
  if (action.type === COMPLETE_TODO) {
    return prevState.map((todo, index) => {
      if (index === action.index) {
        return {...todo, done: true}
      }
      return todo;
    })
  }
  return prevState;
}
