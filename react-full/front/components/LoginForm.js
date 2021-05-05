import React, { useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';

// 실무에서는 리액트에서 제공되는 로그인폼을 이용해 빠르게 완성하자

const LoginForm = () => {
  const [ id, setId ] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = useCallback((e) => {
      setId(e.target.value);
    }, [] );

  const onChangePassword = useCallback((e) => {
      setPassword(e.target.value);
    }, [] );

  return (
    <>
      <Form>
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
        <div>
          <Button type="primary" htmlType="submit" loading={false}>
            로그인
          </Button>
          <Link href="/signup"><a>회원가입</a></Link>
        </div>
        <div>

        </div>
      </Form>

    </>
  );
}

export default LoginForm;