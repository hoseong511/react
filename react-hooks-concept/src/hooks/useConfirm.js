// 만약 사용자가 버튼을 클릭하는 작업을 하면 그 작업을 하기 전 의사를 물어보는 메시지

import React, { useState, useEffect, useRef } from 'react';
import ReactDom from 'react-dom';

const useConfirm = (message='', onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") { // 의무 onConfirm이 없거나 함수가 아니면 
    return;
  }
  if (onCancel && typeof onCancel !== "function") { // 의무는 아니니깐
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
}
// 함수형 프로그래밍!! 함수를 인자로 받아서 그 함수를 실행 여부 판단, hooks를 사용하지는 않지만 
// 그래도 멋진..!
const App = () => {
  const deleteWorld = () => console.log("delete the world");
  const abort = () => console.log('aborted')
  const confirmDelete = useConfirm('Are you sure?',deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  )
}
export default useConfirm;