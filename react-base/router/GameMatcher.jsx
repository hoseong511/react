// 다이나믹 라우터 매칭 -> 효율적으로 라우터를 관리하는 컴포넌트

import React, { Component } from 'react';
import RSP from '../rsp/RSP';
import Lotto from '../lotto/Lotto';
import NumberBaseball from '../baseball/NumberBaseBall';
// 리액트 라우터가 제공하는 기본 메소드를 사용해야한다.
// 리액트라우터의 history는 브라우저의 history에 의존한다
class GameMatcher extends Component {
  render() {
    console.log(this.props.history, this.props.match);
    if (this.props.match.params.name === 'number-baseball') {
      return <NumberBaseball /> ;
    } else if (this.props.match.params.name === 'rock-scissors-paper') {
      return <RSP />
    } else if (this.props.match.params.name === 'lotto') {
      return <Lotto />
    }
    return (
      <>
        해당되는것이 없습니다.
      </>
    )
  }
}

export default GameMatcher;