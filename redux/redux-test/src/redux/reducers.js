import {ADD_TODO} from './actions'

/**
 * state
 *--> ['코딩', '점심 먹기']
 * @param {*} prevState 
 * @param {*} action 
 * @returns 
 */

const initialState = []; // 초기값

export function todoApp(prevState=initialState, action) {
  // if (prevState === undefined) { // 초기값 설정
  //   return []
  // }
  if (action.type === ADD_TODO) {
    return [...prevState, action.todo]; // 객체의 레퍼렌스를 바꿔줘야 한다. 불변성지키기
  }

  return prevState;
}