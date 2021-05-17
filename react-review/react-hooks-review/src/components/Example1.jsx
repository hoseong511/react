import React from 'react';

export default class Example1 extends React.Component {
  state = { count: 0};

  render() {
    const { count } = this.state;

    return (
      <div>
        <p>You Clicked { count } times</p>
        <button onClick={this.click}>++++++</button>
      </div>
    )
  }

  click = () => {
    this.setState((prev) => ( { count: prev.count + 1}))
  }
}