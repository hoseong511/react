import React, { Component } from 'react';

class ResponseCheck extends Component {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요',
  };

  onClickScreen = () => {

  }
  renderAverage = () => {
    const { result } = this.state;
    return result.length === 0 ? null : <div>평균 시간: {this.state.result.reduce((a,c) => a + c) / this.state.result.length}ms</div>;
  }

  render() {
    return (
      <>
        <div id='screen' calssName={this.state.state} onClick={this.onClickScreen}>
          {this.state.message}
        </div>
        {/* {this.state.result.length === 0 ? null : 
          <div>평균 시간: {this.state.result.reduce((a,c) => a + c) / this.state.result.length}ms</div> */}
        {/* /** 보호연산자 또는 삼항연산자를 이용해서 조건 처리를 한다. */}
        {this.renderAverage()}
      </>
    )
  }
}

export default ResponseCheck;