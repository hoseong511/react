import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';



const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  )
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
} // 점검을 통해 서비스의 안정성을 추구하자

export default App;