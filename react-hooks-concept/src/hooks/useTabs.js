import { useState } from 'react';

export const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  },
]

export const useTabs = (initialTab, allTabs) => {    
  const [ currentIndex, setCurrentIndex ] = useState(initialTab); // 0이 currentIndex로 전달
  // console.log(currentIndex);  // 전달된 값 확인
  // setCurrentIndex는 function 
  if (!allTabs || !Array.isArray(allTabs)) {  // 리스트가 없거나 리스트가 아니면 아래 코드
    return {
      currentItem: {content:'error! you need check conditions'},
      changeItem: setCurrentIndex
    };
  }  
  // console.log(setCurrentIndex); // 확인용
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  }
}