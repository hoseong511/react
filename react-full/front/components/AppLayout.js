import React, { useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

// 모바일 먼저 디자인해야 한다. 그다음 데탑!
const AppLayout = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href='/'><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item key="signup">
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
        <Menu.Item key="search">
          <Input.Search style={{verticalAlign:"middle"}} />
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
          <Col xs={24} md={6}>
            {isLogin ? <UserProfile /> : <LoginForm />}
          </Col>
          <Col xs={24} md={12}>
            {children}
          </Col>
          <Col xs={24} md={6}>
            <a href="https://github.com/hoseong511" target="_blank" rel="noreferrer noopener">Made by hoseong511</a>
          </Col>
        </Row>
    </>
  )
};
// target="" 은 문서를 어떠한 방식으로 열지 지정하는 코드이다.(Tabnabbing 을 방지하기위해서 rel="noreferrer noopener"를 넣어준다.)
// 피싱을 방지하자.
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}; // props 검사 검사

export default AppLayout;
