import { useCallback, useMemo, useState } from "react";

function sum(persons) {
  console.log('plus');
  return persons.map(person => person.age).reduce((l, r) => l+r)
}

export default function Example7(){
  const [value, setValue] = useState('');
  const [persons] = useState([
    {name: 'Ho', age: 22},
    {name: 'Mark', age: 33},
    
  ]);
// 반복실행을 줄여줄  useMemo
  const count = useMemo(() => {
    return sum(persons);
  }, [persons]);

  const click = useCallback(()=> {
    console.log(value);
  }, []); // 처음 선언 당시 설정 되어있던 값과 함수가 저장된다.

  return (
    <div>
      <input value={value} onChange={change} type="text" />
      <p>{count}</p>
      <button onClick={click}>click</button>
    </div>
  )

  function change(e) {
    setValue(e.target.value);
  }


}