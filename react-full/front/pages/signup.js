import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
// import AppLayout from '../components/AppLayout';
import Router from 'next/router';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import axios from 'axios';

import useInput from '../hooks/useInput'; // custom hooks
import Mylayout from '../components/MyLayout';
import { LOAD_MY_INFO_REQUEST, signUpRequestAction } from '../reducers/user';
import { LOAD_POST_REQUEST } from '../reducers/post';
import wrapper from '../store/configureStore';

const ErrorMessage = styled.div`
color: red; 
`;

const Signup = () => {
  const dispatch = useDispatch();
  const { isSigningUp, me, isSignedUp, actionError } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);

  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    dispatch(signUpRequestAction({ email, nickname, password }));
  }, [password, passwordCheck, term]);

  useEffect(() => {
    if (me && me.id) {
      Router.replace('/'); // replace는 뒤로가기 허용 x
    }
  }, [me && me.id]);
  

  useEffect(() => {
    if (isSignedUp) {
      Router.replace('/');
    }
  }, [isSignedUp]);

  useEffect(() => {
    if (actionError) {
      alert(actionError);
    }
  }, [actionError])

  return (
    <Mylayout>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          <Input name="user-email" type="email" value={email} required onChange={onChangeEmail} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input name="user-nick" value={nickname} required onChange={onChangeNickname} />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" value={password} type="password" required onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호 확인</label>
          <br />
          <Input name="user-password-check" value={passwordCheck} type="password" required onChange={onChangePasswordCheck} />
          {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            회원정보관리에 동의합니다.
          </Checkbox>
          {termError && <ErrorMessage>위 사항에 동의하셔야 가입 가능합니다</ErrorMessage>}
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit" loading={isSigningUp}>가입하기</Button>
          </div>

        </div>
      </Form>
    </Mylayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  console.log('getServerSideProps start');
  console.log(context.req.headers);  
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });  
  context.store.dispatch(END);
  console.log('getSererSideProps end');
  await context.store.sagaTask.toPromise();
})

export default Signup;
