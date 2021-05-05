import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
// 개발버전은 느리지만 상용버전에서는 정상속도가 된다.
const AppLayout = ({ children }) => {
  return (
    <div>
      <div>공통메뉴</div>
      <Link href='/'>노드버드</Link>
      <br></br>
      <Link href='/profile'>프로필</Link>
      <br></br>
      <Link href='/signup'>회원가입</Link>

      {children}
    </div>
  )
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}; // props 검사 검사

export default AppLayout;
