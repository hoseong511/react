import React, { Component, memo } from 'react'

const Try = memo(({ tryInfo }) => {
  // memo == pure == should
  return (
    <> 
      <li>
        {/* jsx의 주석 */}
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>          
      </li>
    </>
  )
});
export default Try;