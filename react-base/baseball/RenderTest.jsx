import React, { PureComponent } from 'react';

class Test extends PureComponent { // pureComponent 
  state = {
    conter: 0,
    string: 'hello',
    number: 1,
    boolean: true,
    object: {},
    array: []

  }
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   if (this.state.counter !== nextState.counter) {
  //     return true;
  //   }
  //   return false;  // 바뀌는 것이 없으면 렌더링이 안되도록 하는 부분이다.
  // }
  onClick = () => {
    const array = this.state.array;
    this.setState( {
      array: [...this.state.array, 1], // pureComponent던 그냥 component이던 이런식으로 하는것이 원칙이다.
    }) // 배열을 새로만들어 넣는 것이 원칙
    // const array = this.state.array;
    // array.push(1);// pureComponent는 이걸 인식하지 못한다. 그래서 이전에 배웠던 push방법을 활용해야한다.
    // this.setState({
    //   array: array,
    // }); // setState만 호출이 되면 다시 render한다.
  };

  render() {
    console.log('렌더링', this.state);
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    )
  }
}

export default Test;