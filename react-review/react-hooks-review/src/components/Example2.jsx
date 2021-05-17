import React from 'react';

export default function Example2() {
  const [count , setCount ] = React.useState(0);
  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={click}>click~</button>
    </div>
  )
  function click(){
    setCount(count+1);
  }
}