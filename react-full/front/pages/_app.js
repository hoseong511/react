import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";
import "../public/style.scss";
import withReduxSaga from 'next-redux-saga';
import wrapper from "../store/configureStore";

const App = ({ Component }) => {
  return (
    <>
      {" "}
      {/** Next는 Provider로 알아서 감싸준다. */}
      <Head>
        <meta charSet="utf-8"></meta>
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
}; // 점검을 통해 서비스의 안정성을 추구하자

export default wrapper.withRedux(withReduxSaga(App));
