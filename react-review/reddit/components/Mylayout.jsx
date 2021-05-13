import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import "antd/dist/antd.css";
import "../public/style.css";


const Mylayout = ({content}) => {
  const { Header, Content, Footer } = Layout; 
  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        {content}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Toy ©2021 Created by Ho</Footer>
  </Layout>
  )
}

export default Mylayout;