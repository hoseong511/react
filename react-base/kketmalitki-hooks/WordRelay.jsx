// 컴포넌트 분리하기~
const React = require('react');
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: '호호',
    value: '',
    result: '',
  };

  onSubmitForm = (e) => { // 클래스 메소드는 무조건 화살표함수
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: '딩동댕',
        word: this.state.value,
        value: '',
      });
    } else {
      this.setState({
        result: '땡',
        value: ''
      })
    }
    this.input.focus();
  }

  onChangeInput = (e) => {
    this.setState({ value: e.target.value })
  }

  input;

  onRefInput = (c) => {
    this.input = c;
  }

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
          <button>입력!!</button>
        </form>
        <div>{this.state.result}</div>
      </>
    )
  }
}

module.exports = WordRelay; // export node의 모듈시스템