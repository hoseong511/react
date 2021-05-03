import React from 'react';
import { BrowserRouter, HashRouter, Link, Route } from 'react-router-dom';
import GameMatcher from './GameMatcher';

// react router의 hooks API는 사용x
const Games = () => {
  // 해쉬라우터는 SEO되는데 어려움이 있다. -> 해쉬라우터는 브라우저에서만 동작, 서버는 해당 라우터를 모른다. 그래서 서버를 통해 자료를 수집하는 검색엔진에게 자료를 주지 못한다.
  return (
   <BrowserRouter>
    <div>
      공통 부분
      <br/>
      <Link to='/game/number-baseball'>숫자야구</Link>
      &nbsp;
      <Link to='/game/rock-scissors-paper'>가위바위보</Link>
      &nbsp;
      <Link to='/game/lotto'>로또</Link>
      &nbsp;
      <Link to='/game/index'>게임매쳐</Link>
    </div>
    <div>
      <Route path='/game/:name' component={GameMatcher}></Route>
    </div>
   </BrowserRouter> 
  )
}
// 페이지가 여러개있는것이 아니다. 프론트엔드에서만 동작한다.

export default Games;