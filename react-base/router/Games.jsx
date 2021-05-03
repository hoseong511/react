import React from 'react';
import { BrowserRouter, HashRouter, Link, Route, Switch, withRouter } from 'react-router-dom';
import GameMatcher from './GameMatcher';
import Header from './Header';
import Footer from './Footer';
// react router의 hooks API는 사용x
const Games = ({ match, location, history }) => {
  // 해쉬라우터는 SEO되는데 어려움이 있다. -> 해쉬라우터는 브라우저에서만 동작, 서버는 해당 라우터를 모른다. 그래서 서버를 통해 자료를 수집하는 검색엔진에게 자료를 주지 못한다.
  // 브라우저 라우터에 단점은 새로고침시 브라우저가 페이지를 읽어 올 수 없다는 것이 단점이다.
  return (
   <BrowserRouter>
    <section>
      <Header />
      <div>
          <Route exact path='/' render={(props) => <GameMatcher {...props}/>}></Route>
          {/** exact를 붙여줘서 정확하게 원하는 라우터만 나타나게 한다.*/}
          <Route path='/game/:name' render={(props) => <GameMatcher {...props}/>}></Route>
        {/**하위 주소에 일치하는 상위주소가 있을 경우 둘다 렌더링 되는 문제가있다, 이를 해결할 수 있는 방법에는 exact가 있다. */}
      </div>
      <Footer />
    </section>
   </BrowserRouter> 
  )
}
// 페이지가 여러개있는것이 아니다. 프론트엔드에서만 동작한다.

// 함수형 라우터는 이런식으로 사용한다.  , withRouter는 따로 연결된 Route가 없을 때 이용
export default Games;