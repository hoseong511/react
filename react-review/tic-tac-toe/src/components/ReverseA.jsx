import { useState } from 'react';

// 하위 컴포넌트를 변경하기
export default function A() {
  const [value, setValue] = useState('아직 안바뀜');
  return (
    <div>
      <B setValue={setValue}/>
      <h3>{value}</h3>
    </div>
  );
}

function B({setValue}) {
  return (
    <div>
      <p>여긴 B</p>
      <C setValue={setValue}/>
    </div>
  );
}
function C({setValue}) {
  return (
    <div>
      <p>여긴 C</p>
      <D setValue={setValue}/>
    </div>
  );
}
function D({setValue}) {
  return (
    <div>
      <p>여긴 D</p>
      <E setValue={setValue}/>
    </div>
  );
}
function E({setValue}) {
  return (
    <div>
      <p>여긴 E</p>
      <button onClick={click}>A 의 값 바꾸기</button>

    </div>
  );
  function click() {
    setValue('A 의 값을 변경');
  }
}