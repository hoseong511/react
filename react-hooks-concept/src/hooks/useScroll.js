// 스크롤 변화시 작동시킬 효과를 지정하는 훅
import React, { useState, useEffect } from 'react';

const useScroll = () => {
  const [ state, setState ] = useState({
    x: 0,
    y: 0
  });
  const onScroll = (e) => {
    console.log(`y: ${window.scrollY} x: ${window.scrollX}`);
    setState({ y: window.scrollY, x: window.scrollX });
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [])
  return state;
};

export default useScroll;