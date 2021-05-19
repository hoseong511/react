import {ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPLETE} from './actions'
import { combineReducers } from 'redux';
/**
 * state
 *--> ['코딩', '점심 먹기']
 * @param {*} prevState 
 * @param {*} action 
 * @returns 
 * [{text: '코딩', done: false}, {}]
 * { todos: [{text: '코딩', done: false}, {}], filter: 'ALL'}
 */

const initialState = {
  todos: [],
  filter: 'ALL'
}; // 초기값


export function todoApp(prevState=initialState, action) {
  // if (prevState === undefined) { // 초기값 설정
  //   return []
  // }
  if (action.type === ADD_TODO) {
    return { 
      ...prevState,
      todos: [...prevState.todos, { text: action.text, done: false } ]
    }; 
  }
  if (action.type === COMPLETE_TODO) {
    return {
      ...prevState,
      todos : prevState.todos.map((todo, index) => {
      if (index === action.index) {
        return {...todo, done: true}
      }
      return todo;
    })};
  }
  if (action.type === SHOW_ALL) {
    return {
      ...prevState,
      filter: 'ALL'
    };
  }
  if (action.type === SHOW_COMPLETE) {
    return {
      ...prevState,
      filter: 'COMPLETE',
    };
  }

  return prevState;
}