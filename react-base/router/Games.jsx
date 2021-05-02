import React from 'react';
import { BrowserRouter, HashRouter, Link, Route } from 'react-router-dom';
import BaseBall from '../baseball/NumberBaseBall';
import RSP from '../rsp/RSP';
import Lotto from '../lotto/Lotto';

// react router의 hooks API는 사용x
const Games = () => {
  return (
   <BrowserRouter>
    <Link to='/number-baseball'>숫자야구</Link>
    &nbsp;
    <Link to='/rock-scissors-paper'>가위바위보</Link>
    &nbsp;
    <Link to='/lotto'>로또</Link>
    &nbsp;
    <div>
      <Route path='/number-baseball' component={BaseBall}></Route>
      <Route path='/rock-scissors-paper' component={RSP}></Route>
      <Route path='/lotto' component={Lotto}></Route>
    </div>
   </BrowserRouter> 
  )
}

export default Games;