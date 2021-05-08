import React, { useCallback, useContext, memo, useMemo } from 'react';
import { TableContext, CODE, OPEN_CELL, CLICK_MINE, FLAG_CELL, NORMALIZE_CELL, QUESTION_CELL } from './MineSearch';

const getTdStyle = (code) => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: '#444',
      }
    case CODE.OPEND:
      return {
        background: 'white'
      }
    case CODE.QUESTION_MINE:
    case CODE.QUESTION:
      return {
        background: 'yellow'
      }
    case CODE.FLAG_MINE:
    case CODE.FLAG:
      return {
        background: 'red'
      }
    default:
      return {
        background: 'white'
      }
  }
};

const getTdText = (code) => {
  console.log("getTdText");
  switch (code) {
    case CODE.NORMAL:
      return '';
    case CODE.MINE:
      return 'X';
    case CODE.CLICKED_MINE:
      return '펑';
    case CODE.FLAG_MINE:
    case CODE.FLAG:
      return '!';
    case CODE.QUESTION_MINE:
    case CODE.QUESTION:
      return '?';
    default:
      return code || '';
  }
};


const Td = memo(({ rowIndex, cellIndex }) => {
  const { tableData, dispatch, halted } = useContext(TableContext);
  const onClickTd = useCallback(() => {
    console.log(halted);  
    if (halted) {
      return;
    }
    switch (tableData[rowIndex][cellIndex]) {      
      case CODE.OPEND:
      case CODE.FLAG_MINE:
      case CODE.FLAG:
      case CODE.QUESTION:
      case CODE.QUESTION_MINE:
        return;
      case CODE.NORMAL:
        dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex })
        return;
      case CODE.MINE:
        dispatch({ type: CLICK_MINE, row: rowIndex, cell: cellIndex })
        return;
    }
  }, [tableData[rowIndex][cellIndex], halted])

  const onRightClickTd = useCallback((e) => {
    e.preventDefault();
    if (halted) {
      return;
    }
    switch (tableData[rowIndex][cellIndex]) {
      case CODE.NORMAL:
      case CODE.MINE:
        dispatch({ type: FLAG_CELL, row: rowIndex, cell: cellIndex});
        return;
      case CODE.FLAG_MINE:
      case CODE.FLAG:
        dispatch({ type: QUESTION_CELL, row: rowIndex, cell: cellIndex});
        return;
      case CODE.QUESTION_MINE:
      case CODE.QUESTION:
        dispatch({ type: NORMALIZE_CELL, row: rowIndex, cell: cellIndex});
        return;
      default:
        return;
    }
  }, [tableData[rowIndex][cellIndex], halted]);
  console.log("td rendered"); // td는 전체 칸이 실행되지만 실제 내부 컴포넌트들은 하나 씩만 실행되는 것을 알 수 있다.
  return useMemo(() => ( 
    <>
      <td style={getTdStyle(tableData[rowIndex][cellIndex])} 
          onClick={onClickTd}
          onContextMenu={onRightClickTd}>
        {getTdText(tableData[rowIndex][cellIndex])}
      </td>
    </>
  ), [tableData[rowIndex][cellIndex]]);
});

// component를 분리해서 memo를 사용 or usememo사용
export default Td;