import React, { useReducer, createContext, useMemo,useCallback, useEffect } from 'react';
import Table from './Table';
import Form from './Form'
// ContextApi

export const CODE = {
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG:-3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPEND: 0,
}

export const TableContext = createContext({
  tableData: [
    [-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1],
    [-1,-7,-1,-1,-1,-1,-1],
    [],
    [],
  ],
  dispatch: () => {},
}); // 초기값 넣어주기 

const initialState = {
  tableData: [],
  timer: 0,
  result: '',
};

export const START_GAME = 'START_GAME';


const reducer = (state, action) => {
  switch (action.type){
    case START_GAME:
      return {
        ...state,
        tableData: plantMine(action.row, action.cell, action.mine)
      }
    default:
      return state; 
  }
};

const MineSearch = () => { // 자식 컴포넌트들에게 상태를 넘겨주는 효과적인 방법 -> contextAPI, state의 개수를 줄이는 useReduce
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const value = useMemo(() => ({ tableData: state.tableData, dispatch }), [state.tableData]);
  // 이런식으로 캐싱 해주기

  return (
    <TableContext.Provider value={value}>     {/*value={{ tableData: state.tableData, dispatch}}> {/**이런 방식은 매번 새로운 객체가 생성되므로 성능 최악 */}
      <Form dispatch={dispatch} />{/**context Api를 적용해보자 */}
      <div>{state.timer}</div>
      <Table />
      <div>{state.result}</div>
    </TableContext.Provider>
  )
};

export default MineSearch;