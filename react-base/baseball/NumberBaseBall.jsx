import React, { Component} from 'react'; //ES2015
import Try from './Try'
function getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수

}

class NumberBaseball extends Component{
  state = {
    value: '',
    result: '',
    answer: getNumbers(),
    tries: [],
  };

  onSubmitForm = ( ) => {

  }

  onChangeInput = () => {

  }
  input;
  refInput = (e) => {
    this.input = e
  }
  fruits = [
    { fruit: '사과', taste:'맛있다'},
    { fruit: '수박', taste:'맛있다!!'},
    { fruit: '딸기', taste:'맛있다!'},
    { fruit: '포도', taste:'맛있다 무야호~'},
    { fruit: '귤', taste:'맛있다 ㅎㅎㅎ'},
    { fruit: '감', taste:'맛있다!'},
    { fruit: '바나나', taste:'!맛있다'},
    { fruit: '배', taste:'!!맛있다'},
  ]

  render(){
    return (
      <>
      <h1>{this.state.result}</h1>
      <form onSubmit = {this.onSubmitForm}>
        <input ref={this.refInput} maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
      </form>
      <div>시도: {this.state.tries.length}</div>
      <ul>
        {this.fruits.map((v, i) => {
          return (
            <Try value={v} index={i}/> // react에서는 props라고 불린다.
          );
        })
        // key에 index를 사용하지 않는 이유는 요소가 추가또는 삭제 되면 배열의 순서가 바뀌어서 문제가 생긴다.
        }
        
      </ul>
      </>
    );
  }
  
}

export const hello = 'hello'; // import { hello }
export default NumberBaseball; // import NumberBaseball;

// const React = require('react);
// exports.hello = 'hello';           common js -> node에서 사용
// module.exports = NumberBaseball;


// import 와 require에 대해서 알아두자. --> import는 react에서 작동된다. 이 말은 즉, babel이 변환해주는 부분
// webpack.config.js에서는 require를 사용해야 node가 읽을 수 있다.