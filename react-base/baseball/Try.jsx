import React, { PureComponent } from 'react'

class Try extends PureComponent {
  constructor(props) {
    super(props);
    // 다른 동작을 할 수 있다.
    const filtered = this.filter(() => {

    }); // 정밀한 동작을 할 수 있도록 도와준다.
    state = {
      result: filtered,
      try: this.props.try,
    }

  }
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