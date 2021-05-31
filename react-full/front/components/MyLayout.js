/* eslint-disable react/jsx-indent */
/* eslint-disable no-trailing-spaces */
import React from "react";
import { Layout, Menu, Dropdown, Row, Col, Input } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { createGlobalStyle } from 'styled-components';
import { useSelector } from "react-redux"; // react랑 redux를 연결
import PropTypes from 'prop-types';
import UserProfile from "./UserProfile";
import styles from "./MyLayout.module.css";
import LoginButton from "./LoginButton";

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
  const { me } = useSelector((state) => state.user);

  return (
    <>
      <Global />
      <Layout>
        <Header className={styles['inner']} style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <Row justify="start">
            <Col xs={5} md={6}>
              <Link href="/">
                <img src="./sun.png" className={styles["logo"]} alt="sun" />
              </Link>
            </Col>
            <Col xs={14} md={12}>
              <Input.Search
                placeholder="input search text"
                allowClear
                size="default"
                style={{ verticalAlign: "middle" }}
              />
            </Col>
            <Col xs={5} md={6} style={{ textAlign: 'right' }}>
              <Dropdown
                overlay={
                      <Menu>
                        {me ? (<>
                                <Menu.Item key="home"><Link href="/"><a>Home</a></Link></Menu.Item>
                                <Menu.Item key="profile"><Link href="/profile"><a>My profile</a></Link></Menu.Item>
                                <Menu.Item key="logout"><UserProfile /></Menu.Item>
                              </>)
                            : (<>
                                <Menu.Item key="home"><Link href="/"><a>Home</a></Link></Menu.Item>
                                <Menu.Item key="signup"><Link href="/signup"><a>signUp</a></Link></Menu.Item>
                                <Menu.Item key="login"><LoginButton /></Menu.Item>
                              </>)
                        }
                      </Menu>
                  }
                trigger={["click"]}>
                <a onClick={(e) => {e.preventDefault()}} className="ant-dropdown-link" >
                  <UserOutlined style={{ color: "white" }} /> &nbsp;
                  <DownOutlined style={{ color: "white" }} />
                </a>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Content className="site-layout">
          <Row>
            <Col xs={0} md={6} />
            <Col xs={24} md={12}>
              <div className="site-layout-background">{children}</div>
            </Col>
            <Col xs={0} md={6} />
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }}>Toy ©2021 Created by Ho</Footer>
      </Layout>
    </>
  );
};

Mylayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Mylayout;
