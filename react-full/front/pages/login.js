/* eslint-disable react/react-in-jsx-scope */
import { useSelector } from 'react-redux'; // react랑 redux를 연결
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import Mylayout from '../components/MyLayout';

const Login = () => {
  const { me } = useSelector((state) => state.user);
  return (
    <Mylayout>
      {me ? <UserProfile /> : <LoginForm />}
    </Mylayout>
  );
};

export default Login;
