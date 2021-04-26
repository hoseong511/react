import React, { Component } from 'react'

class Try extends Component {
  render() {
    console.log(this.props.tryInfo);
    return (
      <> 
        <li>
          {/* jsx의 주석 */}
          <div>{this.props.tryInfo.try}</div>
          <div>{this.props.tryInfo.result}</div>          
        </li>
      </>
    )
  }
}
// 부모요소로 부터 props를 받는다.
export default Try;