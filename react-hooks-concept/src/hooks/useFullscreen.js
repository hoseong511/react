import React, {useState, useEffect, useRef } from 'react';

const useFullscreen = () => {
  const element = useRef();
  const [isFull, setIsFull] = useState(false);

  const runCb = (isFull) => { // 작동이 신기하네
    console.log(isFull ? 'we are full' : 'we are small');
    setIsFull(isFull);
  }

  const triggerFull = () => {
    if(element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if(element.current.mozRequestFullScreen){
        element.current.mozRequestFullScreen();
      } else if(element.current.webRequestFullScreen){
        element.current.webRequestFullScreen();
      } else if(element.current.msRequestFullScreen){
        element.current.msRequestFullScreen();
      }
      runCb(true);
    } // 브라우저 별로 분리하여 최대화를 해줄 수 있음 .. 이처럼 조건별로 처리하고 싶은 기능이 다른 경우 활용해보도록 하자 !
  }
  const exitFull = () => {
    document.exitFullscreen();
      runCb(false);
  }
  return { element, triggerFull, exitFull, isFull };
}


export default useFullscreen;