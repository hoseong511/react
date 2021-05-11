// 창을 닫기 전 저장하지 않았다는 메시지를 전달한다.

import React, { useState, useEffect, useRef } from 'react';
import ReactDom from 'react-dom';

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue =""; // 이 부분이 있어야만 작동한다.
  }
    const enablePrevent = () => window.addEventListener("beforeunload", listener)
  const disablePrevent = () =>window.removeEventListener("beforeunload",listener)
  return {enablePrevent, disablePrevent};
}
const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <>
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unprotect</button>
    </>
  )
}

export default usePreventLeave;