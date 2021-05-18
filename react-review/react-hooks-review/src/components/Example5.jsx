import React from 'react';

export default function Example5() {
  const [count , setCount ] = React.useState(0);

  React.useEffect(() => {
    console.log('componentDidMount');
    

    return () => {
      // cleanup
      // componentWillUnmount
    }
  }, []);

  React.useEffect(() => {
    console.log('componentDidMount & componentDidUPdate by count', count);
    document.title = count;
    return () => {
      // cleanup
      console.log('clenup by count ', count );
    }
  }, [count]);
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