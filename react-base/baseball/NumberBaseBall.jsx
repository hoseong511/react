import React, { Component, createRef} from 'react'; //ES2015
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

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   if (this.state.counter !== nextState.counter) {
  //     return true;
  //   }
  //   return false;  // 바뀌는 것이 없으면 렌더링이 안되도록 하는 부분이다.
  // } 

  // A -> B -> C   A에서 C로 바로 넘겨주는 역할 = context! 그리고 redux

  // onSubmitForm(e) {
  //   console.log(this);
  // } 초기에는 이런식으로 this에 접근을 했다.
  onSubmitForm = (e) => { // 화살표 함수가 bind를 자동으로 해주는 역할
    e.preventDefault();
    const {value, reuslt, answer, tries} = this.state
    if (value === answer.join('')){ // 연달아 state를 이용하는 경우 함수형 setState를 사용하기 
      this.setState( (prevState) => {
        return {
            result: '홈런!',
            tries: [...prevState.tries, { try: value, result: '홈런!'}], // 참조 값이 달라져야 변화를 감지하는 방식
          }        
        }
      )
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
            reuslt: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
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
            this.setState( (prevState) => {
              return {
                tries: [...prevState.tries, { try: value, result: `${strike} 스트라이트, ${ball} 볼입니다.`}],
                value: '',
              }          
            })
          }  
      }
    console.log(value);
    this.inputRef.current.focus(); // ref접근
  }

  onChangeInput = (e) => {
    console.log(this);
    this.setState( {
      value: e.target.value,
    });
  }
  inputRef = createRef(); // createRef로 ref 접근 
// 함수로 만드는 경우는 다른 조건이나 동작을 추가할 수 있다.
// 자유도 증가! 1급 함수 highOrder function: 함수 안에 함수
  render(){
    return (
      <>
      <h1>{this.state.result}</h1>
      <form onSubmit = {this.onSubmitForm}>
        <input ref={this.inputRef} maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
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