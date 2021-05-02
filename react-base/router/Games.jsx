import React from 'react';
import { BrowserRouter, HashRouter, Link, Route } from 'react-router-dom';
import BaseBall from '../baseball/NumberBaseBall';
import RSP from '../rsp/RSP';
import Lotto from '../lotto/Lotto';

// react router의 hooks API는 사용x
const Games = () => {
  return (
   <BrowserRouter>
    <div>
      공통 부분
      <br/>
      <Link to='/number-baseball'>숫자야구</Link>
      &nbsp;
      <Link to='/rock-scissors-paper'>가위바위보</Link>
      &nbsp;
      <Link to='/lotto'>로또</Link>
      &nbsp;
    </div>
    <div>
      <Route path='/number-baseball' component={BaseBall}></Route>
      <Route path='/rock-scissors-paper' component={RSP}></Route>
      <Route path='/lotto' component={Lotto}></Route>
    </div>
   </BrowserRouter> 
  )
}
// 페이지가 여러개있는것이 아니다. 프론트엔드에서만 동작한다.

export default Games;