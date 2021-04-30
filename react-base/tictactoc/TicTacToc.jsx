import React, {useState, useReducer, useCallback} from 'react';
import Table from './Table';
// state를 바꾸고 싶으면 이벤트가 실행될 때 action을 dispatch해서 state를 바꾼다. state를 어떻게 바꿀지는 reducer에 기록되어있다
const initialState = {
  winner: '',
  turn: 'O',
  tableData: [
    ['','',''],
    ['','',''],
    ['','','']
  ]
};

export const SET_WINNER = 'SET_WINNER' // 컨벤션임 action 들은 대문자로표현
export const CLICK_CELL = 'CLICK_CELL'; // action을 다른 컴포넌트들에게 내보내기
export const CHANGE_TURN = 'CHANGE_TURN';

const reducer = (state, action) => {
  switch (action.type){
    case SET_WINNER:
      // state.winner = action.winner ; 이렇게 하면 안된다.
      return {
        ...state, // 기존 state는 그대로 얕게 복사하고, 바뀌는 부분만 바꿔주기
        winner: action.winner, // 불변성 지키기
      };
    case CLICK_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]]; // 불변성 지키기 immer라는 라이브러리로 해결
      tableData[action.row][action.cell] = state.turn;
      return{
        ...state,
        tableData,
      }
    }
    case CHANGE_TURN: {
      return {
        ...state,
        turn: state.turn === 'O' ? 'X' : 'O', // 번갈아 가면서 작동시키려는 목적
      }
    }

  }
};

const TicTacToc = () => { // 자식 컴포넌트들에게 상태를 넘겨주는 효과적인 방법 -> contextAPI, state의 개수를 줄이는 useReduce
  const [state, dispatch] = useReducer(reducer, initialState)


  // const [ winner, setWinner ] = useState('');
  // const [ turn, setTurn ] = useState('O');
  // const [ tableData, setTableData ] = useState([['','',''],['','',''],['','','']]);
  // state들이 많아지면 관리가 힘든데 이를 해결할 수 있는 기능
  const onClickTable = useCallback(()=>{
    dispatch({type: SET_WINNER, winner: 'O'}); // action의 역할? action을 해석해서 직접 바꾸는 역할 이 바로 reducer
  }, []);

  return (
    <>
      <Table onClick={onClickTable} tableData={state.tableData} dispatch={dispatch}/>
      {state.winner && <div>{state.winner}님의 승리</div>}
    </>
  )
};

export default TicTacToc;