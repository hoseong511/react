import { useState } from 'react';

// 하위 컴포넌트를 변경하기
export default function A() {
  const [value, setValue] = useState('아직 안바뀜');
  const [yn, setYN] = useState(false);
  return (
    <div>
      <B setValue={setValue} setYN={setYN}/>
      <h3>{value}</h3>
      {yn && <p> 전달 완료</p>}
    </div>
  );
}

function B({setValue, setYN}) {
  return (
    <div>
      <p>여긴 B</p>
      <C setValue={setValue} setYN={setYN}/>
    </div>
  );
}
function C({setValue, setYN}) {
  return (
    <div>
      <p>여긴 C</p>
      <D setValue={setValue} setYN={setYN}/>
    </div>
  );
}
function D({setValue, setYN}) {
  return (
    <div>
      <p>여긴 D</p>
      <E setValue={setValue} setYN={setYN}/>
    </div>
  );
}
function E({setValue, setYN}) {
  return (
    <div>
      <p>여긴 E</p>
      <button onClick={click}>A 의 값 바꾸기</button>

    </div>
  );
  function click() {
    setYN(true);
    setValue('A 의 값을 변경');
  }
}