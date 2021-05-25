import React, { useCallback, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { loginRequestAction } from '../reducers/user';
// import { useRouter } from 'next/router';
const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;// styled컴포넌트를 ssr에 설정을 해놓지 않아서 처음 화면에서는 적용되지 않은 상태로 보여진다

const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoggingIn, actionError } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  // const history = useRouter();
  useEffect(() => {
    if (actionError) {
      alert(actionError)
    }
  }, [actionError])

  const onSubmitForm = useCallback(() => {
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  return (
    <>
      <FormWrapper onFinish={onSubmitForm}>
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
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
          <Button type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
          <Link href="/signup"><a>회원가입</a></Link>
        </ButtonWrapper>
      </FormWrapper>
    </>
  );
};

export default LoginForm;
