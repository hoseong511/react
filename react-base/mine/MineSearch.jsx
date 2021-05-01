import React, { useReducer, useCallback, useEffect } from 'react';
import Table from './Table';
import Form from './Form'

const initialState = {
  tableData: [],
  timer: 0,
  result: '',
};

const reducer = (state, action) => {
  switch (action.type){
    default:
      return state; 
  }
};

const MineSearch = () => { // 자식 컴포넌트들에게 상태를 넘겨주는 효과적인 방법 -> contextAPI, state의 개수를 줄이는 useReduce
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      <Form dispatch={dispatch} />{/**context Api를 적용해보자 */}
      <div>{state.timer}</div>
      <Table />
      <div>{state.result}</div>
    </>
  )
};

export default MineSearch;