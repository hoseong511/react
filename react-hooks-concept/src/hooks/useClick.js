import React, { useState, useRef, useEffect } from 'react';

const useClick = (func) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", func);
      console.log(element.current.textContent);
    }
    return () => {
      console.log('unmount');
      if (element.current) {
        element.current.removeEventListener("click", func);
      }
    }
  }, []);
  if (!func || typeof func !== "function") {
    return
  } // useEffect보다 먼저 return 될수 없다는 에러 ? 발생!
  return element;
}

export default useClick;