/* eslint-disable react/react-in-jsx-scope */
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

import { useSelector } from 'react-redux'; // react랑 redux를 연결
import Mylayout from '../components/MyLayout';

const Login = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  return (
    <Mylayout>
      {isLogin ? <UserProfile /> : <LoginForm />}
    </Mylayout>
  )
}

export default Login;
