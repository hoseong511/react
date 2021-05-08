import React, { useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';

import { loginAction } from '../reducers/user';
const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`// styled컴포넌트를 ssr에 설정을 해놓지 않아서 처음 화면에서는 적용되지 않은 상태로 보여진다

const LoginForm = () => {
  const dispatch = useDispatch();
  const [ id, onChangeId ] = useInput('');
  const [password, onChangePassword] = useInput('');

// NEXT.js에 onFinish 기능에는 e.preventdefault가 내장 되어 있다.
  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    dispatch(loginAction({ id, password }))
    // setIsLoggedIn(true);
  },[id, password]);

  //useMemo를 이용한 스타일
  // const style = useMemo(() => ({ marginTop: 10 }), []); // onClick과 같은 방식으로 style={style}"

  return (
    <>
      <FormWrapper onFinish={onSubmitForm}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br/>
          <Input name="user-id" value={id} onChange={onChangeId} required/>
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input 
              name="user-password" 
              type="password"
              value={password}
              onChange={onChangePassword}
              required
              />

        </div>
        <ButtonWrapper>
          <Button type="primary" htmlType="submit" loading={false}>
            로그인
          </Button>
          <Link href="/signup"><a>회원가입</a></Link>
        </ButtonWrapper>
      </FormWrapper>

    </>
  );
}


export default LoginForm;