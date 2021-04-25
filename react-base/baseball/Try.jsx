import React, { Component } from 'react'

class Try extends Component {
  render() {
    return (
      <> 
        <li key={this.props.value.fruit + this.props.value.taste}>
          {this.props.value.fruit} - {this.props.index+1}
          <div>컨텐츠12</div>
          <div>컨텐츠2</div>
          <div>컨텐츠3</div>
          <div>컨텐츠4</div>
        </li>
      </>
    )
  }
}

export default Try;