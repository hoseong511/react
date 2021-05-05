import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';

// 모바일 먼저 디자인해야 한다. 그다음 데탑!
const AppLayout = ({ children }) => {
  return (
    <div>
      <div>공통메뉴</div>
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
          <Input.Search />
        </Menu.Item>
        <Row gutter={8}>
          <Col xs={24} md={6}>
            왼쪽 메뉴
          </Col>
          <Col xs={24} md={12}>
            {children}
          </Col>
          <Col xs={24} md={6}>
            <a href="https://github.com/hoseong511" target="_blank" rel="noreferrer noopener">Made by hoseong511</a>
          </Col>
        </Row>
      </Menu>
    </div>
  )
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}; // props 검사 검사

export default AppLayout;
