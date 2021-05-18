import { useRef, useState, createRef } from "react";

export default function Example8(){
  const [value, setValue] = useState('');
  const inputRef = createRef();
  const input2Ref = useRef();

  // 렌더된 후 에 참조,, 성립되는 useRef 이후에도 계속 기능이 유지된다.
  console.log(inputRef.current, input2Ref.current);

  return (
    <div>
      <input value={value} onChange={change} type="text" />
      <input ref={inputRef} type="text" />
      <input ref={input2Ref} type="text" />
    </div>
  )

  function change(e) {
    setValue(e.target.value);
  }


}