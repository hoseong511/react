import React, { Component } from 'react'

const Try = ({ tryInfo = this.props }) => {
  
  return (
    <> 
      <li>
        {/* jsx의 주석 */}
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>          
      </li>
    </>
  )
}
export default Try;