import React from 'react';
import { Layout, Menu, Breadcrumb, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import "../public/style.css";

const menu = (
<Menu >
  <Menu.Item key="1">Home</Menu.Item>
  <Menu.Item key="2"></Menu.Item>
  <Menu.Item key="3">nav 3</Menu.Item>
</Menu>
)

const Mylayout = ({content}) => {
  const { Header, Content, Footer } = Layout; 
  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
      <div className="logo" >
        Toy
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Click me <DownOutlined />
          </a>
        </Dropdown>
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