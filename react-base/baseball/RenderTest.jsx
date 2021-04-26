import React, { Component } from 'react';

class Test extends Component {
  state = {
    conter: 0,
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.state.counter !== nextState.counter) {
      return true;
    }
    return false;  // 바뀌는 것이 없으면 렌더링이 안되도록 하는 부분이다.
  }
  onClick = () => {
    this.setState({}); // setState만 호출이 되면 다시 render한다.
  };

  render() {
    console.log('렌더링', this.state);
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    )
  }
}

export default Test;