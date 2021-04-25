import React, { Component} from 'react'; //ES2015

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

  render(){
    return (
      <>
      <h1>{this.state.result}</h1>
      <form onSubmit = {this.onSubmitForm}>
        <input ref={this.refInput} maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
      </form>
      <div>시도: {this.state.tries.length}</div>
      <ul>
        {['like','like','like','like','like'].map((data) => {
          return <li>{data}</li>
        })
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