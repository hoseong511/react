import React, { useCallback, useMemo, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { Menu, Input, Row, Col, Button, Content,Layout } from 'antd';
import {
  HomeOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  UserOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { useSelector } from 'react-redux'; // react랑 redux를 연결

import Mylayout from './MyLayout';

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
`; /**
 * 이런식으로 Global에 담아서 고유한 css를 수정하는 방법도 있다.
 */


// 모바일 먼저 디자인해야 한다. 그다음 데탑!
const AppLayout = ({ children }) => {
  const style_a = useMemo(() => ({ 'text-align':'center'}))
  
  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);
  //   return () => { // cleanup 
  //     window.removeEventListener('resize', handleResize);
  //   }
  // }, [collapsed]);

  return (
    <>
    <Global />
    <Layout>
      <Mylayout />      
      <Layout.Content>
        <div className="site-layout-background">
          <div className="site-layout-content">
            {children}    
          </div>
        </div>

      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>Toy ©2021 Created by Ho</Layout.Footer>

    </Layout>
    
    </>
  
  )
};
// target="" 은 문서를 어떠한 방식으로 열지 지정하는 코드이다.(Tabnabbing 을 방지하기위해서 rel="noreferrer noopener"를 넣어준다.)
// 피싱을 방지하자.
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}; // props 검사 검사

export default AppLayout;
