import React from 'react';
import { Layout, Menu, Breadcrumb, Dropdown, Row, Col, Input } from 'antd';
import { DownOutlined, UserOutlined,LoginOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import "../public/style.scss";

const menu = (
<Menu >
  <Menu.Item key="1">Home</Menu.Item>
  <Menu.Item key="2">Profile</Menu.Item>
  <Menu.Item key="3">Contact</Menu.Item>
  <Menu.Item key="3">LogIn</Menu.Item>
</Menu>
)

const Mylayout = ({content}) => {
  const { Header, Content, Footer } = Layout; 
  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
      <div className="inner">
        <Row justify={'start'}>
          <Col flex="50px">
            <a href="/" className="logo">
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="logo" /> 
            </a>
          </Col>

          <Col flex="auto">
            <Input.Search
                    placeholder="input search text"
                    allowClear
                    size="default"
                    style={{verticalAlign:"middle"}}/>
          </Col>       
            
          <Col flex="auto">
            <Dropdown overlay={menu} trigger={['click']} >
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              <UserOutlined style={{color:'white'}}/> &nbsp;<DownOutlined style={{color:'white'}}/>
              </a>
            </Dropdown>
          </Col>
        </Row>
      </div>
    </Header>
        
    <Content className="site-layout" >
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background">
        {content}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Toy ©2021 Created by Ho</Footer>
  </Layout>
  )
}

export default Mylayout;