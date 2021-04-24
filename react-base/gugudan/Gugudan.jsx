const React = require('react');
const { Component } = React

class Gugudan extends Component {
  constructor(props){
    super(props);
    this.state = {
      first: Math.ceil(Math.random() *9),
      second: Math.ceil(Math.random() *9),
      value: '',
      result: '',
      user: '',          
    };
    console.log("hw");
  }

  // 화살표를 사용했을 때 this와 function의 this가 다르다.
  // 
  onSubmit = (e) => {
    e.preventDefault(); // 팝업되어 새로고침되는 것을 막아준다.
    console.log(this);
    if (parseInt(this.state.value) === this.state.first * this.state.second) {
      // this.setState({
      //   result: '무'
      // }) --> 이런식으로 값을 설정했는데 아래와 같이 하면 더욱 좋다 
      this.setState((prevState) => { //예전 상태값을 다음 상태값에 활용할 수 있다.
        console.log(prevState);
        return {
          result: '정답' + prevState.value,
          first: Math.ceil(Math.random()* 9),
          second: Math.ceil(Math.random() * 9),
          user: this.state.value,
          value: ''
        } // 이렇게 사용하는게 더 좋음 비동기로 처리
      }); // this.setState()를
    } else {
      this.setState({
        result: "땡",
        user: this.state.value,
        value: '',
      });
    }
    this.input.focus();
  };
 
  onChange = (e) => this.setState({value: e.target.value})
  input;
  onRefInput = (c) => this.input = c;

  render() { 
    console.log("렌더링");
    // setState를 하면 render가 실행
    // () 괄호 그룹연산자
    return (
      // XML과 메소드를 따로 분리하는 이유는 렌더링 될 시 매번 새로 생성하는 낭비가 발생함
      // 그래서 메소드는 위로 올려 놓자
      <>
        <div>{this.state.first} 곱하기 {this.state.second}는?</div>
        <form onSubmit={this.onSubmit}>
          <input ref={(c) => { this.input = c}}type='number' value={this.state.value} onChange={this.onChange}/>
          <button>입력</button>
        </form>              
        <div>
          { this.state.result}
        </div>
           
      </>
      // <></>(fragment) 바벨이 지원을 안해서 react.fragment를 입력 원래는 <></>를 이용해서 div의 반복을 줄이자.
    );
  }
}
// 바뀔 여지가 있는 부분을 상태(state)라고 한다.

module.exports = Gugudan;