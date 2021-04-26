import React, { Component} from 'react'; //ES2015
import Try from './Try'
function getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidate = [1,2,3,4,5,6,7,8,9]
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const choosen = candidate.splice(Math.floor(Math.random() * (9-i)), 1)[0];
    array.push(choosen)
    console.log(array);
  }
  return array;
}

class NumberBaseball extends Component{
  constructor(props){
    super(props)
    this. state = {
      value: '',
      result: '',
      answer: getNumbers(),
      tries: [], // react에서 push를 사용하면 안된다. push를 하게된다면 리액트가감지를 못한다.
    };
    this.onSubmitForm = this.onSubmitForm.bind(this); // 기존에 사용되던 방식
    this.onChangeInput = this.onChangeInput.bind(this);
  }
  // onSubmitForm(e) {
  //   console.log(this);
  // } 초기에는 이런식으로 this에 접근을 했다.
  onSubmitForm = (e) => { // 화살표 함수가 bind를 자동으로 해주는 역할
    e.preventDefault();
    const {value, reuslt, answer, tries } = this.state
    if (value === answer.join('')){
      this.setState({
        result: '홈런!',
        tries: [...tries, { try: value, result: '홈런!'}], // 참조 값이 달라져야 변화를 감지하는 방식
      })
      this.setState({
        value: '',
        answer: getNumbers(),
        tries: [],
      });
    } else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        this.setState( {
          reuslt: `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(',')}였습니다!`,
        });
        alert('게임을 다시 시작합니다!');
        this.setState({
          value: '',
          answer: getNumbers(),
          tries: [],
        });
      } else{
        for (let i = 0; i < 4; i += 1){
          if (answerArray[i] === answer[i]){
            strike += 1;
          } else if ( answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState({
          tries: [...tries, { try: value, result: `${strike} 스트라이트, ${ball} 볼입니다.`}],
          value: '',
        })
      }  
    }
    console.log(value);
  }

  onChangeInput = (e) => {
    console.log(this);
    this.setState( {
      value: e.target.value,
    });
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
        {this.state.tries.map((v, i) => {
          return (
            <Try key={`${i+1}차 시도: `} tryInfo={v}/> // react에서는 props라고 불린다.
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