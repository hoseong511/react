import React, { Component } from 'react'

class Try extends Component {
  render() {
    return (
      <> 
        <li>
          {/* jsx의 주석 */}
          {this.props.value.fruit} - {this.props.index+1}
          <div>컨텐츠12</div>
          <div>컨텐츠2</div>
          <div>컨텐츠3</div>
          <div>컨텐츠4</div>
        </li>
      </>
    )
  }
}
// 부모요소로 부터 props를 받는다.
export default Try;