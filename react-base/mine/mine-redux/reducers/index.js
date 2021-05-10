import React from 'react';

const initialState = {
  tableData: [],
  data: {
    row:0,
    cell:0,
    mine:0
  },
  timer: 0,
  result: '',
  halted: false,
  opened_count: 0,
}


const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        data: { row: action.row, cell: action.cell, mine: action.mine },
        opened_count: 0,
        tableData: plantMine(action.row, action.cell, action.mine),
        halted: false,
        timer: 0
      }
    case OPEN_CELL: {
      const tableData = [...state.tableData];
      tableData.forEach((row, i) => {
        tableData[i] = [...row];
      });
      const checked = [];
      let open_count = 0;
      console.log(tableData.length, tableData[0].length);
      const checkAround = (row, cell) => {
        console.log(row, cell);
        if (row < 0 || row >= tableData.length || cell < 0 || cell >= tableData[0].length) {
          return;
        } // 상하좌우 없는칸은 안 열기
        if ([CODE.OPEND, CODE.FLAG, CODE.FLAG_MINE, CODE.QUESTION_MINE, CODE.QUESTION].includes(tableData[row][cell])) {
          return;
        } // 닫힌 칸만 열기
        if (checked.includes(row + '/' + cell)) {
          return;
        } else {
          checked.push(row + '/' + cell);
        } // 한 번 연칸은 무시하기
        let around = [
          tableData[row][cell - 1], tableData[row][cell + 1],
        ];
        if (tableData[row - 1]) {
          around = around.concat([tableData[row - 1][cell - 1], tableData[row - 1][cell], tableData[row - 1][cell + 1]]);
        }
        if (tableData[row + 1]) {
          around = around.concat([tableData[row + 1][cell - 1], tableData[row + 1][cell], tableData[row + 1][cell + 1]]);
        }
        const count = around.filter(function (v) {
          return [CODE.MINE, CODE.FLAG_MINE, CODE.QUESTION_MINE].includes(v);
        }).length;
        if (count === 0) { // 주변칸 오픈
          if (row > -1) {
            const near = [];
            if (row - 1 > -1) {
              near.push([row -1, cell - 1]);
              near.push([row -1, cell]);
              near.push([row -1, cell + 1]);
            }
            near.push([row, cell - 1]);
            near.push([row, cell + 1]);
            if (row + 1 < tableData.length) {
              near.push([row + 1, cell - 1]);
              near.push([row + 1, cell]);
              near.push([row + 1, cell + 1]);
            }
            near.forEach((n) => {
              if (tableData[n[0]][n[1]] !== CODE.OPEND) {
                checkAround(n[0], n[1]);
              }
            });
          }
        }
        if (tableData[row][cell] === CODE.NORMAL ) {
          open_count += 1;
        }
        tableData[row][cell] = count;
      };
      checkAround(action.row, action.cell);
      let halted = false;
      let result = '';
      console.log(state.data.row, state.data.cell, state.data.mine, state.opened_count + open_count);
      if (state.data.row * state.data.cell - state.data.mine === state.opened_count + open_count) {
        halted = true;
        result = `${state.timer}초만에 승리`;
      }
      return {
        ...state,
        tableData,
        opened_count: state.opened_count + open_count,
        halted,
        result,
      };
    }
    case CLICK_MINE: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      tableData[action.row][action.cell] = CODE.CLICKED_MINE;
      return {
        ...state,
        tableData,
        halted: true,
      };
    }
    case FLAG_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      if (tableData[action.row][action.cell] === CODE.MINE){
        tableData[action.row][action.cell] = CODE.FLAG_MINE;
      } else {
        tableData[action.row][action.cell] = CODE.FLAG;
      }
      return {
        ...state,
        tableData,
      };
    }
    case QUESTION_CELL:{
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      if (tableData[action.row][action.cell] === CODE.FLAG_MINE){
        tableData[action.row][action.cell] = CODE.QUESTION_MINE;
      } else {
        tableData[action.row][action.cell] = CODE.QUESTION;
      }
      return {
        ...state,
        tableData,
      };
    }
    case NORMALIZE_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      if (tableData[action.row][action.cell] === CODE.QUESTION_MINE){
        tableData[action.row][action.cell] = CODE.MINE;
      } else {
        tableData[action.row][action.cell] = CODE.NORMAL;
      }
      return {
        ...state,
        tableData,
      };
    }
    case INCREMENT_TIMER: {
      return {
        ...state,
        timer: state.timer+1,
      }
    }
    default:
      return state; 
  }
  
}

export default rootReducer;