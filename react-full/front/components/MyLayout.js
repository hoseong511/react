import React from 'react';
import { Layout, Menu, Dropdown, Row, Col, Input } from 'antd';
import { DownOutlined, UserOutlined,LoginOutlined, HomeOutlined,  } from '@ant-design/icons';
import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux'; // react랑 redux를 연결
import UserProfile from './UserProfile';

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .ant-col:first-child {
    padding-left: 0 !important;
  }

  .ant-col:last-child {
    padding-right: 0 !important;
  }
`; 

const Mylayout = ({ children }) => {
  const { Header, Content, Footer } = Layout; 
  const isLogin = useSelector((state) => state.user.isLogin);
  
  return (
    <>
    <Global />

    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
        <div className="inner">
          <Row justify={'start'}>
            <Col flex="50px">
              <Link href='/'>
                <a className="logo">
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="logo" /> 
                </a>
              </Link>
            </Col>
            <Col flex="auto">
              <Input.Search
                      placeholder="input search text"
                      allowClear
                      size="default"
                      style={{verticalAlign:"middle"}}/>
            </Col>       
            <Col flex="auto">
              <Dropdown overlay={
                <Menu >
                  <Menu.Item key="home"  >
                    <Link href='/'><a>Home</a></Link>
                  </Menu.Item>
                  {isLogin && 
                    <Menu.Item key="profile"  >
                      <Link href="/profile"><a>My profile</a></Link>
                    </Menu.Item>
                  }
                  {isLogin || 
                    <Menu.Item key="signup"  >
                      <Link href="/signup"><a>signUp</a></Link>
                    </Menu.Item>}                
                  {isLogin 
                    ? 
                      <Menu.Item key="logout">
                        <UserProfile /> 
                      </Menu.Item> 
                    :
                      <Menu.Item key="login">
                        <Link href="/login"><a>Login</a></Link>
                      </Menu.Item>}
                  
                </Menu>
              } trigger={['click']} >
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <UserOutlined style={{color:'white'}}/> &nbsp;<DownOutlined style={{color:'white'}}/>
                </a>
              </Dropdown>
            </Col>
          </Row>
        </div>
      </Header>
    <Content className="site-layout">
      <Row>
        <Col xs={0} md={6}>
        </Col>
        <Col xs={24} md={12}>
          <div className="site-layout-background">
              {children}    
          </div>
        </Col>
        <Col xs={0} md={6}>
        </Col>
      </Row>
      

  </Content>
  <Footer style={{ textAlign: 'center' }}>Toy ©2021 Created by Ho</Footer>

</Layout>
</>
        
  
  )
}

export default Mylayout;