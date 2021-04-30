import React, { useCallback } from 'react';
import { CLICK_CELL, CHANGE_TURN } from './TicTacToc'

const Td = ({rowIndex, cellIndex, dispatch, cellData }) => {
  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    if (cellData) {
      return;
    }
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex})
    // dispatch에서 바뀌는 state는 비동기이다.
  }, [cellData]);

  return (
    <td onClick={onClickTd}>{cellData}</td>
  )
}

export default Td;