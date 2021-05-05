import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
// 개발버전은 느리지만 상용버전에서는 정상속도가 된다.
const AppLayout = ({ children }) => {
  return (
    <div>
      <div>공통메뉴</div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href='/'><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href='/profile'><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href='/signup'><a>회원가입</a></Link>
        </Menu.Item>
        

      </Menu>
      <br></br>
      <br></br>

      {children}
    </div>
  )
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}; // props 검사 검사

export default AppLayout;
