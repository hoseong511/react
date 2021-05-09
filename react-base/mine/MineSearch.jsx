import React, { useReducer, createContext, useMemo, useEffect } from 'react';
import Table from './Table';
import Form from './Form'
import { useDispatch } from 'react-redux';
import { timerAction } from './mine-redux/reducers';
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
  tableData: [],
  halted: false,
  dispatch: () => {},
}); // 초기값 넣어주기 



const MineSearch = () => { // 자식 컴포넌트들에게 상태를 넘겨주는 효과적인 방법 -> contextAPI, state의 개수를 줄이는 useReduce
  const dispatch = useDispatch();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tableData, halted, timer, result } = state;
  const value = useMemo(() => ({ tableData, halted, dispatch }), [tableData, halted]);
  // 이런식으로 캐싱 해주기
  useEffect(() => {
    let timer;
    if ( halted === false){
      timer = setInterval(() => {
        dispatch(timerAction());
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    }
  }, [halted]);

  return (
    <TableContext.Provider value={value}>     {/*value={{ tableData: state.tableData, dispatch}}> {/**이런 방식은 매번 새로운 객체가 생성되므로 성능 최악 */}
      <Form dispatch={dispatch} />{/**context Api를 적용해보자 */}
      <div>{timer}</div>
      <Table />
      <div>{result}</div>
    </TableContext.Provider>
  )
};

export default MineSearch;