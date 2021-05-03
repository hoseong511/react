// 다이나믹 라우터 매칭 -> 효율적으로 라우터를 관리하는 컴포넌트

import React, { Component } from 'react';

class GameMatcher extends Component {
  render() {
    console.log(this.props.history, this.props.match);
    return (
      <>
      게임매쳐
      </>
    )
  }
}

export default GameMatcher;