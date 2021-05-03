// 다이나믹 라우터 매칭 -> 효율적으로 라우터를 관리하는 컴포넌트

import React, { Component } from 'react';
import RSP from '../rsp/RSP';
import Lotto from '../lotto/Lotto';
import NumberBaseball from '../baseball/NumberBaseBall';
// 리액트 라우터가 제공하는 기본 메소드를 사용해야한다.
// 리액트라우터의 history는 브라우저의 history에 의존한다
class GameMatcher extends Component {
  render() {
    let urlSearchParams = new URLSearchParams(this.props.location.search.slice(1));
    console.log(urlSearchParams.get('hi')); // 리액트에 쿼리스트링을 분석하는 기능이 없기에 이런식으로 쿼리스트링을 분석해야한다.
    // 쿼리스트링은 주로 게시판을 조작할때 사용한다.
    // 부가적인 정보를 다룰 때 이용하자
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
// 함수 컴포넌트의 경우 this.props로 파라미터를 받아올 수 있다. 
export default GameMatcher;