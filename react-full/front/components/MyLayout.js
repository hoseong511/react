import React from "react";
import { Layout, Menu, Dropdown, Row, Col, Input, Modal, Button } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux"; // react랑 redux를 연결
import UserProfile from "./UserProfile";
import styles from "./MyLayout.module.css";
import PropTypes from 'prop-types'
import LoginForm from "./LoginForm";
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
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => {
    setVisible(true);
  };

  return (
    <>
      <Global />
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className={styles['inner']}>
            <Row justify={"start"}>
              <Col xs={5} md={6}>
                <Link href="/">
                  <img
                    src="./sun.png"
                    alt="Picture of the author"
                    className={styles["logo"]}
                  />
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
              <Col xs={5} md={6} style={{textAlign: 'right'}}>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item key="home"><Link href="/"><a>Home</a></Link></Menu.Item>
                      {isLoggedIn && (<Menu.Item key="profile"><Link href="/profile"><a>My profile</a></Link></Menu.Item>)}
                      {isLoggedIn || (<Menu.Item key="signup"><Link href="/signup"><a>signUp</a></Link></Menu.Item>)}
                      {isLoggedIn ? (<Menu.Item key="logout"><UserProfile /></Menu.Item>) 
                                  : (
                                  <Menu.Item key="login">
                                    <Button type="primary" onClick={showModal}>
                                      Login
                                    </Button>
                                    <Modal
                                      title="Title"
                                      visible={visible}
                                      footer={null}
                                    ><LoginForm />
                                    </Modal>
                                  </Menu.Item>)}
                    </Menu>
                  }
                  trigger={["click"]} >
                  <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                    <UserOutlined style={{ color: "white" }} /> &nbsp;
                    <DownOutlined style={{ color: "white" }} />
                  </a>
                </Dropdown>
              </Col>
            </Row>
          </div>
        </Header>
        <Content className="site-layout">
          <Row>
            <Col xs={0} md={6}></Col>
            <Col xs={24} md={12}>
              <div className="site-layout-background">{children}</div>
            </Col>
            <Col xs={0} md={6}></Col>
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
