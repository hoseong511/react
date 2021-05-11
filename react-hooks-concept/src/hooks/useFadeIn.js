import { useRef, useEffect } from 'react';
// 1. hooks 구조 - useRef 
/**
 * const aaa = () => {
 *  const element = useRef();
 *  return element
 * }
 */
const useFadeIn = (duration = 1, delay = 3) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
    // return () => {
    // }
  }, [])
  if (typeof duration !== "number" && typeof delay !== "number" ){
    return
  }
  return { ref: element, style: { opacity: 0 } };
}

export default useFadeIn;