import React, { useCallback, useMemo, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import { Menu, Input, Row, Col, Button } from 'antd';
import {
  HomeOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  UserOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { useSelector } from 'react-redux'; // react랑 redux를 연결

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

// 리렌더링을 방지하기 위해서 인라인 스타일을 사용하지 않는다. -> styled를 사용해서 스타일을 이용
// 리렌더링은 바뀌는 부분만 다시 렌더링되는것 헷갈리지 말자.!
const SearchInput = styled(Input.Search)`
verticalAlign:middle;
`;
// 모바일 먼저 디자인해야 한다. 그다음 데탑!
const AppLayout = ({ children }) => {
  const isLogin = useSelector((state) => state.user.isLogin);

  const [collapsed, setCollapsed] = useState(false);

  const style_a = useMemo(() => ({ 'text-align':'center'}))

  const toggleCollapsed = useCallback(() => {
    if (collapsed) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  }, [collapsed]);

  const handleResize = () => {
    console.log(`브라우저 화면 사이즈 x: ${window.innerWidth}, y: ${window.innerHeight}`);
    if (window.innerWidth < 1130) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => { // cleanup 
      window.removeEventListener('resize', handleResize);
    }
  }, [collapsed]);

  return (
    <>
      <Row gutter={8}>
        <Col xs={6} md={6}>
          <div style={{ width: 280 }}>
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
            <Menu 
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                style={{zIndex:9}} >
              <Menu.Item key="home"  icon={<HomeOutlined />}>
                <Link href='/'><a>Home</a></Link>
              </Menu.Item>
              <Menu.Item key="profile"  icon={<UserOutlined />}>
                <Link href="/profile"><a>My profile</a></Link>
              </Menu.Item>
              <Menu.Item key="signup"  icon={<SettingOutlined />}>
                <Link href="/signup"><a>Settings</a></Link>
              </Menu.Item>
              {/* <Menu.Item key="search" onClick={toggleCollapsed} icon={<SearchOutlined />}>
                <SearchInput 
                 placeholder="input search text"
                 allowClear
                 enterButton="Search"
                 size="default"/>
              </Menu.Item> */}

            </Menu>
          </div>
          <a href="https://github.com/hoseong511" target="_blank" rel="noreferrer noopener" style={style_a}>Made by hoseong511</a>

        </Col>
      
        <Col xs={18} md={12}>
          {children}
        </Col>
        <Col xs={0} md={6}>
          {isLogin ? <UserProfile /> : <LoginForm />}
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
