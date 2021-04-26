import React, { Component, memo, useState } from 'react'
// props의 내부 값은 부모에서 변경을 시키는 것이 원칙
// 그래서 아래와 같은 방식으로 접근한다.
const Try = memo(({ tryInfo }) => {
  // memo == pure == should
  const [result, setResult ] = useState(tryInfo.result)
  const onClick = () => {
    setResult('1');
  }

  return (
    <> 
      <li>
        {/* jsx의 주석 */}
        <div>{tryInfo.try}</div>
        <div onClick={onClick}>{tryInfo.result}</div>          
      </li>
    </>
  )
});
export default Try;