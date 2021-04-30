import React, {useState, useReducer} from 'react';
import Table from './Table';

const initialState = {
  winner: '',
  turn: 'O',
  tableData: [['','',''],['','',''],['','','']]
};

const reducer = (state, action) => {

};

const TicTacToc = () => { // 자식 컴포넌트들에게 상태를 넘겨주는 효과적인 방법 -> contextAPI, state의 개수를 줄이는 useReduce
  const [state, dispatch] = useReducer(erducer, initialState)


  // const [ winner, setWinner ] = useState('');
  // const [ turn, setTurn ] = useState('O');
  // const [ tableData, setTableData ] = useState([['','',''],['','',''],['','','']]);
  // state들이 많아지면 관리가 힘든데 이를 해결할 수 있는 기능

  return (
    <>
      <Table data={turn, tableData}/>
      {winner && <div>{winner}님의 승리</div>}
    </>
  )
};

export default TicTacToc;