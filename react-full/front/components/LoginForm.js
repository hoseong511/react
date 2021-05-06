import React, { useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`

const LoginForm = ({ setIsLoggedIn }) => {
  const [ id, setId ] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = useCallback((e) => {
      setId(e.target.value);
    }, [] );

  const onChangePassword = useCallback((e) => {
      setPassword(e.target.value);
    }, [] );

// NEXT.js에 onFinish 기능에는 e.preventdefault가 내장 되어 있다.
  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
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