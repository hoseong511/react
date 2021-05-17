import React from 'react';


// useState => { count: 0}
export default function Example3() {
  const [state , setState ] = React.useState({ count: 0});
  return (
    <div>
      <p>You Clicked {state.count} times</p>
      <button onClick={click}>click~</button>
    </div>
  )
  function click(){
    setState(prev => ({
      count : prev.count + 1
      })
    );
  }
}